import { Direction } from "../types";

export abstract class Shape {
  protected x: number;
  protected y: number;
  protected speed: number = 1;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  abstract draw(): void;
  abstract isOutOfBounds(direction: Direction): boolean;

  public move = (direction: Direction) => {
    if (!this.isOutOfBounds(direction)) {
      const { speed } = this;
      switch (direction) {
        case Direction.UP:
          this.y -= speed;
          break;
        case Direction.DOWN:
          this.y += speed;
          break;
        case Direction.RIGHT:
          this.x += speed;
          break;
        case Direction.LEFT:
          this.x -= speed;
          break;
      }
    }
  };
}
