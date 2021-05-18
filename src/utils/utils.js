var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import _ from "lodash";
import { BOARD_HEIGHT_CNT, BOARD_WIDTH_CNT, } from "../constants/constants";
import { Block_I, Block_J, Block_L, Block_O, Block_S, Block_Shadow, Block_T, Block_Z, } from "../models/blocks";
import { Space } from "../models/spaces";
/**
 * 25 x 10 의 빈 Space 배열 반환
 * @returns
 */
export var getEmptyBoard = function () {
    return _.times(BOARD_HEIGHT_CNT, function () { return _.times(BOARD_WIDTH_CNT, function () { return new Space(); }); });
};
/**
 * 블럭 랜덤으로 얻기
 * @returns
 */
export var getRandomBlock = function () {
    var blockClassList = [
        new Block_I(),
        new Block_O(),
        new Block_Z(),
        new Block_S(),
        new Block_J(),
        new Block_L(),
        new Block_T(),
    ];
    var i = Math.floor(Math.random() * 7);
    return blockClassList[i];
};
/**
 * block이 채워져있는 space인지 파악
 * @param space
 * @returns
 */
var isBlockSpace = function (space) { return !!space && !!space._block; };
/**
 * ** 그려줄 게임영역 정보를 반환
 * @param location
 * @param block
 * @param board
 * @returns
 */
export var getBoard = function (_a, block, board) {
    var d_1 = _a.d_1, d_2 = _a.d_2;
    var cloned = _.cloneDeep(board);
    var _position = block._position;
    var _b = getRangeInfo({ d_1: d_1, d_2: d_2 }, _position), range_d_1 = _b[0], range_d_2 = _b[1];
    var shadowLocation = getEnableBottomLocation({ d_1: d_1, d_2: d_2 }, block._position, board);
    _.forEach(range_d_1, function (d1, i) {
        return _.forEach(range_d_2, function (d2, j) {
            if (_position[i][j] === 1) {
                cloned[shadowLocation.d_1 + i][d2] = new Space(new Block_Shadow(block));
                cloned[d1][d2] = new Space(block);
            }
        });
    });
    _.forEach(board, function (row, i) {
        if (_.every(row, function (space) { return space._block; })) {
            cloned = __spreadArray(__spreadArray([], cloned.slice(0, i)), cloned.slice(i + 1));
            cloned.unshift(_.times(BOARD_WIDTH_CNT, function () { return new Space(); }));
        }
    });
    return cloned;
};
/**
 * 제거될 줄의 수를 반환
 * @param board
 * @returns
 */
export var getRemovedCnt = function (board) {
    var cnt = 0;
    _.forEach(board, function (row) {
        if (_.every(row, function (space) { return space._block; })) {
            cnt++;
        }
    });
    return cnt;
};
/**
 * 포지션의 탐색범위를 반환
 * @param location
 * @param position
 * @returns
 */
var getRangeInfo = function (_a, position) {
    var d_1 = _a.d_1, d_2 = _a.d_2;
    return [
        _.range(d_1, d_1 + position.length),
        _.range(d_2, d_2 + position[0].length),
    ];
};
/**
 * 각 블럭의 최하단에 위치한 조각인지 파악
 * @param location
 * @param position
 * @returns
 */
var isBottomOfPosition = function (_a, position) {
    var d_1 = _a.d_1, d_2 = _a.d_2;
    var isBlock = position[d_1][d_2] === 1;
    var isBottom = true;
    var cnt = 1;
    while (d_1 + cnt < position.length) {
        if (position[d_1 + cnt][d_2] === 1) {
            isBottom = false;
            break;
        }
        cnt++;
    }
    return isBlock && isBottom;
};
/**
 * 각 블럭의 최좌측에 위치한 조각인지 파악
 * @param location
 * @param position
 * @returns
 */
var isLeftOfPosition = function (_a, position) {
    var d_1 = _a.d_1, d_2 = _a.d_2;
    var isBlock = position[d_1][d_2] === 1;
    var isLeft = true;
    var cnt = 1;
    while (d_2 - cnt >= 0) {
        if (position[d_1][d_2 - cnt] === 1) {
            isLeft = false;
            break;
        }
        cnt++;
    }
    return isBlock && isLeft;
};
/**
 * 각 블럭의 최우측에 위치한 조각인지 파악
 * @param location
 * @param position
 * @returns
 */
var isRightOfPosition = function (_a, position) {
    var d_1 = _a.d_1, d_2 = _a.d_2;
    var isBlock = position[d_1][d_2] === 1;
    var isRight = true;
    var cnt = 1;
    while (d_2 + cnt < position[0].length) {
        if (position[d_1][d_2 + cnt] === 1) {
            isRight = false;
            break;
        }
        cnt++;
    }
    return isBlock && isRight;
};
/**
 * 각 포지션(블럭)별 가능한 최저 위치를 반환
 * @param location
 * @param position
 * @param board
 */
var getEnableBottomLocation = function (_a, position, board) {
    var d_1 = _a.d_1, d_2 = _a.d_2;
    var next_d_1 = d_1;
    var touchingBoundary = false;
    var touchingBlock = false;
    while (!touchingBoundary && !touchingBlock) {
        touchingBoundary = isTouchingBoundary("ArrowDown" /* arrowDown */, { d_1: next_d_1, d_2: d_2 }, position);
        touchingBlock = isTouchingBlock("ArrowDown" /* arrowDown */, { d_1: next_d_1, d_2: d_2 }, position, board);
        next_d_1++;
    }
    return { d_1: Math.max(next_d_1 - 2, d_1), d_2: d_2 };
};
/**
 * 키보드의 각 key별, 다음 시점의 블럭을 그리는 기준이 될 location을 반환
 * @param key
 * @param location
 * @param position
 * @param board
 * @returns
 */
export var getNextLocation = function (key, _a, position, board) {
    var _b;
    var d_1 = _a.d_1, d_2 = _a.d_2;
    return ((_b = {},
        _b["ArrowUp" /* arrowUp */] = { d_1: d_1, d_2: d_2 },
        _b["ArrowDown" /* arrowDown */] = {
            d_1: d_1 + 1,
            d_2: d_2,
        },
        _b["ArrowLeft" /* arrowLeft */] = {
            d_1: d_1,
            d_2: d_2 - 1,
        },
        _b["ArrowRight" /* arrowRight */] = {
            d_1: d_1,
            d_2: d_2 + 1,
        },
        _b[" " /* spaceBar */] = getEnableBottomLocation({ d_1: d_1, d_2: d_2 }, position, board),
        _b)[key]);
};
/**
 * 특정 블럭이 기존 영역의 블럭과 겹치는지 확인
 * @param location
 * @param position
 * @param board
 * @returns
 */
export var overlapSomePosition = function (_a, position, board) {
    var d_1 = _a.d_1, d_2 = _a.d_2;
    var _b = getRangeInfo({ d_1: d_1, d_2: d_2 }, position), range_d_1 = _b[0], range_d_2 = _b[1];
    return _.some(range_d_1, function (d1) {
        return _.some(range_d_2, function (d2) { return isBlockSpace(board[d1][d2]); });
    });
};
/**
 * 해당 블럭이, 특정 방향으로 다른 블럭에 닿아있는지 파악
 * @param key
 * @param location
 * @param position
 * @param board
 * @returns
 */
export var isTouchingBlock = function (key, _a, position, board) {
    var _b;
    var d_1 = _a.d_1, d_2 = _a.d_2;
    var _c = getRangeInfo({ d_1: d_1, d_2: d_2 }, position), range_d_1 = _c[0], range_d_2 = _c[1];
    var judgeMap = (_b = {},
        _b["ArrowDown" /* arrowDown */] = isBottomOfPosition,
        _b["ArrowLeft" /* arrowLeft */] = isLeftOfPosition,
        _b["ArrowRight" /* arrowRight */] = isRightOfPosition,
        _b[" " /* spaceBar */] = isBottomOfPosition,
        _b);
    return key === "ArrowUp" /* arrowUp */
        ? overlapSomePosition({ d_1: d_1, d_2: d_2 }, position, board)
        : _.some(range_d_1, function (d1, i) {
            return _.some(range_d_2, function (d2, j) {
                return judgeMap[key]({ d_1: i, d_2: j }, position) &&
                    isBlockSpace(_.get(board, [d1, d2]));
            });
        });
};
/**
 * 키보드의 각 key별, 게임영역의 경계에 닿는지 파악
 * @param key
 * @param location
 * @param position
 * @returns
 */
export var isTouchingBoundary = function (key, _a, position) {
    var _b;
    var d_1 = _a.d_1, d_2 = _a.d_2;
    return ((_b = {},
        _b["ArrowUp" /* arrowUp */] = d_1 + position.length > BOARD_HEIGHT_CNT ||
            d_2 < 0 ||
            d_2 + position[0].length > BOARD_WIDTH_CNT,
        _b["ArrowDown" /* arrowDown */] = d_1 + position.length > BOARD_HEIGHT_CNT,
        _b["ArrowLeft" /* arrowLeft */] = d_2 < 0,
        _b["ArrowRight" /* arrowRight */] = d_2 + position[0].length > BOARD_WIDTH_CNT,
        _b[" " /* spaceBar */] = d_1 + position.length > BOARD_HEIGHT_CNT,
        _b)[key]);
};
/**
 * ** 다음 프레임에 대한 유효성 정보 반환
 * @param key
 * @param location
 * @param position
 * @param board
 * @returns
 */
export var getNextFrameInfo = function (key, location, position, board) {
    var nextLocation = getNextLocation(key, location, position, board);
    return [
        isTouchingBoundary(key, nextLocation, position),
        isTouchingBlock(key, nextLocation, position, board),
        nextLocation,
    ];
};
/**
 * 회전된 블럭을 반환
 * @param block
 * @returns
 */
export var getRotatedBlock = function (block) {
    var rotated = _.cloneDeep(block);
    var _position = rotated._position;
    var rotatedPosition = [];
    _.forEach(_position[0], function (row, i) {
        var inner = [];
        _.forEach(_position, function (space, j) {
            inner.push(_position[j][i]);
        });
        rotatedPosition.unshift(inner);
    });
    rotated._position = rotatedPosition;
    return rotated;
};
//# sourceMappingURL=utils.js.map