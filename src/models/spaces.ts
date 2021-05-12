import { Block } from "./blocks";

export class Space {
  _block: Block | null;

  constructor(block?: Block) {
    this._block = block;
  }
}
