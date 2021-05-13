export const BOARD_HEIGHT_CNT = 25;
export const BOARD_WIDTH_CNT = 15;

export const CELL_WIDTH_PX = 20;

export const enum KeyboardKey {
  arrowUp = "ArrowUp",
  arrowDown = "ArrowDown",
  arrowLeft = "ArrowLeft",
  arrowRight = "ArrowRight",
  spaceBar = " ",
}

export interface Location {
  d_1: number;
  d_2: number;
}
