import { v4 as uuidv4 } from "uuid";

import { Block } from "./blocks";

export class Space {
  _block: Block | null;
  _id: string;

  constructor(block?: Block) {
    this._id = uuidv4();
    this._block = block;
  }
}
