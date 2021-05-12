export const enum BlockType {
  I,
  O,
  Z,
  S,
  J,
  L,
  T,
}

export class Block {
  protected _type: BlockType;
  _position: number[][];
  protected _color: string;
}

export class Block_I extends Block {
  constructor() {
    super();

    this._type = BlockType.I;
    this._position = [[1], [1], [1], [1]];
    this._color = "#02475e";
  }
}

export class Block_O extends Block {
  constructor() {
    super();

    this._type = BlockType.O;
    this._position = [
      [1, 1],
      [1, 1],
    ];
    this._color = "#687980";
  }
}

export class Block_Z extends Block {
  constructor() {
    super();

    this._type = BlockType.Z;
    this._position = [
      [1, 1, 0],
      [0, 1, 1],
    ];
    this._color = "#f3bda1";
  }
}

export class Block_S extends Block {
  constructor() {
    super();

    this._type = BlockType.S;
    this._position = [
      [0, 1, 1],
      [1, 1, 0],
    ];
    this._color = "#f55c47";
  }
}

export class Block_J extends Block {
  constructor() {
    super();

    this._type = BlockType.J;
    this._position = [
      [0, 1],
      [0, 1],
      [1, 1],
    ];
    this._color = "#9fe6a0";
  }
}

export class Block_L extends Block {
  constructor() {
    super();

    this._type = BlockType.L;
    this._position = [
      [1, 0],
      [1, 0],
      [1, 1],
    ];
    this._color = "#564a4a";
  }
}

export class Block_T extends Block {
  constructor() {
    super();

    this._type = BlockType.T;
    this._position = [
      [1, 1, 1],
      [0, 1, 0],
    ];
    this._color = "#511281";
  }
}
