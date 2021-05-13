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
  const judgePositionMap = {
    [KeyboardKey.arrowDown as KeyboardKey]: isBottomOfPosition,
    // [Direction.Left]: isLeftOfPosition,
    // [Direction.Right]: isRightOfPosition,
  };

  return _.some(range_d_1, (d1, i) =>
    _.some(
      range_d_2,
      (d2, j) =>
        judgePositionMap[key]({ d_1: i, d_2: j }, position) &&
        isBlockSpace(_.get(board, [d1 + 1, d2]))
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
      d_1 + position.length >= BOARD_HEIGHT_CNT ||
      d_2 <= 0 ||
      d_2 + position[0].length >= BOARD_WIDTH_CNT,
    [KeyboardKey.arrowDown]: d_1 + position.length >= BOARD_HEIGHT_CNT,
    [KeyboardKey.arrowLeft]: d_2 <= 0,
    [KeyboardKey.arrowRight]: d_2 + position[0].length >= BOARD_WIDTH_CNT,
    [KeyboardKey.spaceBar]: true,
  }[key]);

/**
 * ** 다음 프레임에 대한 유효성 정보 반환
 * @param key
 * @param location
 * @param position
 * @param board
 * @returns
 */
export const getValidateInfoNextFrame = (
  key: KeyboardKey,
  location: Location,
  position: number[][],
  board: Space[][]
): boolean[] => [
  isTouchingBoundary(key, location, position),
  isTouchingBlock(key, location, position, board),
];
