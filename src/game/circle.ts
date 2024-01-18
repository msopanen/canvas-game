import { Context } from ".";
import { Direction } from "../types";
import { Shape } from "./shape";

export class Circle extends Shape {
  private c: Context;
  private r: number;

  constructor(c: Context, x: number, y: number, r: number) {
    super(x, y);
    this.c = c;
    this.r = r;
  }

  public draw = () => {
    const { x, y, r } = this;
    const { ctx } = this.c;

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();
  };

  public isOutOfBounds(direction: Direction): boolean {
    const { x, y, r } = this;
    const { cnv, player } = this.c;

    player.resetOutOfBounds(direction);

    switch (direction) {
      case Direction.UP:
        if (y > r) return false;
        break;
      case Direction.DOWN:
        if (y + r < cnv.height) return false;
        break;
      case Direction.RIGHT:
        if (x + r < cnv.width) return false;
        break;
      case Direction.LEFT:
        if (x > r) return false;
        break;
    }

    player.playOutOfBounds();

    return true;
  }

  public getXYR = () => {
    const { x, y, r } = this;
    return { cx: x, cy: y, rad: r };
  };

  public increaseSpeed = (n: number) => {
    this.speed += n;
  };
}
