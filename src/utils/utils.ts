import _ from "lodash";

import { BOARD_HEIGHT_CNT, BOARD_WIDTH_CNT } from "../constants/constants";
import { Space } from "../models/spaces";

/**
 * 25 x 10 의 빈 Space 배열 반환
 * @returns {Space[][]}
 */
export const getEmptySpaceListAll = (): Space[][] =>
  _.times(BOARD_HEIGHT_CNT, () => _.times(BOARD_WIDTH_CNT, () => new Space()));
