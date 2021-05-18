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

  get type(): BlockType {
    return this._type;
  }

  get color(): string {
    return this._color;
  }
}

export class Block_I extends Block {
  constructor() {
    super();

    this._type = BlockType.I;
    this._position = [[1], [1], [1], [1]];
    this._color = "rgb(2, 71, 94)";
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
    this._color = "rgb(104, 121, 128)";
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
    this._color = "rgb(249, 177, 8)";
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
    this._color = "rgb(245, 91, 71)";
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
    this._color = "rgb(159, 230, 160)";
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
    this._color = "rgb(86, 74, 74)";
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
    this._color = "rgb(81, 18, 129)";
  }
}

export class Block_Shadow extends Block {
  constructor(block: Block) {
    super();

    this._type = block.type;
    this._position = block._position;
    this._color = `${block.color.split(')')[0]}, 0.4)`;
  }
}
