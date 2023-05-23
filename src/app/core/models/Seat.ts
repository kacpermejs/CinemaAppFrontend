import { ISeat } from "./ISeat";


export class Seat implements ISeat {

  private _occupied: boolean;
  private _column: string;
  private _row: string;

  constructor(occupied: boolean, row: string, column: string) {
    this._occupied = occupied;
    this._row = row;
    this._column = column;
  }

  public get occupied(): boolean {
    return this._occupied;
  }
  public get row(): string {
    return this._row;
  }
  public get column(): string {
    return this._column;
  }
}
