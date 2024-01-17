import { Direction } from "../types";

export abstract class Shape {
  protected x: number;
  protected y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  abstract draw(): void;
  abstract isOutOfBounds(direction: Direction): boolean;

  public move = (direction: Direction) => {
    if (!this.isOutOfBounds(direction)) {
      switch (direction) {
        case Direction.UP:
          this.y -= 1;
          break;
        case Direction.DOWN:
          this.y += 1;
          break;
        case Direction.RIGHT:
          this.x += 1;
          break;
        case Direction.LEFT:
          this.x -= 1;
          break;
      }
    }
  };
}
