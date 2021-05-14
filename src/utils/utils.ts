import _ from "lodash";

import {
  BOARD_HEIGHT_CNT,
  BOARD_WIDTH_CNT,
  Location,
  KeyboardKey,
} from "../constants/constants";
import {
  Block,
  Block_I,
  Block_J,
  Block_L,
  Block_O,
  Block_S,
  Block_T,
  Block_Z,
} from "../models/blocks";
import { Space } from "../models/spaces";

/**
 * 25 x 10 의 빈 Space 배열 반환
 * @returns
 */
export const getEmptyBoard = (): Space[][] =>
  _.times(BOARD_HEIGHT_CNT, () => _.times(BOARD_WIDTH_CNT, () => new Space()));

/**
 * 블럭 랜덤으로 얻기
 * @returns
 */
export const getRandomBlock = (): Block => {
  const blockClassList: Block[] = [
    new Block_I(),
    new Block_O(),
    new Block_Z(),
    new Block_S(),
    new Block_J(),
    new Block_L(),
    new Block_T(),
  ];
  const i: number = Math.floor(Math.random() * 7);

  return blockClassList[i];
};

/**
 * block이 채워져있는 space인지 파악
 * @param space
 * @returns
 */
const isBlockSpace = (space: Space): boolean => !!space && !!space._block;

/**
 * ** 그려줄 게임영역을 반환
 * @param location
 * @param block
 * @param board
 * @returns
 */
export const getBoard = (
  { d_1, d_2 }: Location,
  block: Block,
  board: Space[][]
): Space[][] => {
  const cloned = _.cloneDeep(board);
  const { _position } = block;
  const [range_d_1, range_d_2] = getRangeInfo({ d_1, d_2 }, _position);

  _.forEach(range_d_1, (d1, i) =>
    _.forEach(range_d_2, (d2, j) => {
      if (_position[i][j] === 1) {
        cloned[d1][d2] = new Space(block);
      }
    })
  );

  return cloned;
};

/**
 * 포지션의 탐색범위를 반환
 * @param location
 * @param position
 * @returns
 */
const getRangeInfo = ({ d_1, d_2 }: Location, position: number[][]) => [
  _.range(d_1, d_1 + position.length),
  _.range(d_2, d_2 + position[0].length),
];

/**
 * 각 블럭의 최하단에 위치한 조각인지 파악
 * @param location
 * @param position
 * @returns
 */
const isBottomOfPosition = (
  { d_1, d_2 }: Location,
  position: number[][]
): boolean => {
  const isBlock = position[d_1][d_2] === 1;
  let isBottom = true;
  let cnt = 1;

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
const isLeftOfPosition = (
  { d_1, d_2 }: Location,
  position: number[][]
): boolean => {
  const isBlock = position[d_1][d_2] === 1;
  let isLeft = true;
  let cnt = 1;

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
const isRightOfPosition = (
  { d_1, d_2 }: Location,
  position: number[][]
): boolean => {
  const isBlock = position[d_1][d_2] === 1;
  let isRight = true;
  let cnt = 1;

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
const getEnableBottomLocation = (
  { d_1, d_2 }: Location,
  position: number[][],
  board: Space[][]
): Location => {
  let next_d_1 = d_1;
  let touchingBoundary = false;
  let touchingBlock = false;

  while (!touchingBoundary && !touchingBlock) {
    touchingBoundary = isTouchingBoundary(
      KeyboardKey.arrowDown,
      { d_1: next_d_1, d_2 },
      position
    );
    touchingBlock = isTouchingBlock(
      KeyboardKey.arrowDown,
      { d_1: next_d_1, d_2 },
      position,
      board
    );

    next_d_1++;
  }

  return { d_1: Math.max(next_d_1 - 2, d_1), d_2 };
};

/**
 * 키보드의 각 key별, 다음 시점의 블럭을 그리는 기준이 될 location을 반환
 * @param key
 * @param location
 * @param position
 * @param board
 * @returns
 */
export const getNextLocation = (
  key: string,
  { d_1, d_2 }: Location,
  position: number[][],
  board: Space[][]
): Location =>
  ({
    [KeyboardKey.arrowUp]: { d_1, d_2 },
    [KeyboardKey.arrowDown]: {
      d_1: d_1 + 1,
      d_2,
    },
    [KeyboardKey.arrowLeft]: {
      d_1,
      d_2: d_2 - 1,
    },
    [KeyboardKey.arrowRight]: {
      d_1,
      d_2: d_2 + 1,
    },
    [KeyboardKey.spaceBar]: getEnableBottomLocation(
      { d_1, d_2 },
      position,
      board
    ),
  }[key]);

/**
 * 특정 블럭이 기존 영역의 블럭과 겹치는지 확인
 * @param location
 * @param position
 * @param board
 * @returns
 */
export const overlapSomePosition = (
  { d_1, d_2 }: Location,
  position: number[][],
  board: Space[][]
): boolean => {
  const [range_d_1, range_d_2] = getRangeInfo({ d_1, d_2 }, position);
  return _.some(range_d_1, (d1) =>
    _.some(range_d_2, (d2) => isBlockSpace(board[d1][d2]))
  );
};

/**
 * 해당 블럭이, 특정 방향으로 다른 블럭에 닿아있는지 파악
 * @param key
 * @param location
 * @param position
 * @param board
 * @returns
 */
export const isTouchingBlock = (
  key: KeyboardKey,
  { d_1, d_2 }: Location,
  position: number[][],
  board: Space[][]
): boolean => {
  const [range_d_1, range_d_2] = getRangeInfo({ d_1, d_2 }, position);
  const judgeMap = {
    [KeyboardKey.arrowUp as KeyboardKey]: overlapSomePosition,
    [KeyboardKey.arrowDown as KeyboardKey]: isBottomOfPosition,
    [KeyboardKey.arrowLeft as KeyboardKey]: isLeftOfPosition,
    [KeyboardKey.arrowRight as KeyboardKey]: isRightOfPosition,
    // TODO: 아래고쳐야함
    [KeyboardKey.spaceBar as KeyboardKey]: isBottomOfPosition,
  };

  return _.some(range_d_1, (d1, i) =>
    _.some(
      range_d_2,
      (d2, j) =>
        judgeMap[key]({ d_1: i, d_2: j }, position, board) &&
        isBlockSpace(
          key === KeyboardKey.arrowDown
            ? _.get(board, [d1 + 1, d2])
            : _.get(board, [d1, d2])
        )
    )
  );
};

/**
 * 키보드의 각 key별, 게임영역의 경계에 닿는지 파악
 * @param key
 * @param location
 * @param position
 * @returns
 */
export const isTouchingBoundary = (
  key: KeyboardKey,
  { d_1, d_2 }: Location,
  position: number[][]
): boolean =>
  ({
    [KeyboardKey.arrowUp]:
      d_1 + position.length > BOARD_HEIGHT_CNT ||
      d_2 < 0 ||
      d_2 + position[0].length > BOARD_WIDTH_CNT,
    [KeyboardKey.arrowDown]: d_1 + position.length > BOARD_HEIGHT_CNT,
    [KeyboardKey.arrowLeft]: d_2 < 0,
    [KeyboardKey.arrowRight]: d_2 + position[0].length > BOARD_WIDTH_CNT,
    [KeyboardKey.spaceBar]: d_1 + position.length > BOARD_HEIGHT_CNT,
  }[key]);

/**
 * ** 다음 프레임에 대한 유효성 정보 반환
 * @param key
 * @param location
 * @param position
 * @param board
 * @returns
 */
export const getNextFrameInfo = (
  key: KeyboardKey,
  location: Location,
  position: number[][],
  board: Space[][]
): [boolean, boolean, Location] => {
  const nextLocation: Location = getNextLocation(
    key,
    location,
    position,
    board
  );

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
export const getRotatedBlock = (block: Block): Block => {
  const rotated: Block = _.cloneDeep(block);
  const { _position } = rotated;
  const rotatedPosition: number[][] = [];

  _.forEach(_position[0], (row, i) => {
    const inner: number[] = [];
    _.forEach(_position, (space, j) => {
      inner.push(_position[j][i]);
    });
    rotatedPosition.unshift(inner);
  });

  rotated._position = rotatedPosition;
  return rotated;
};
