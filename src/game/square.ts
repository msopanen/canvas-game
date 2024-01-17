import { Context } from ".";
import { Direction, Locatable, Point } from "../types";
import { Shape } from "./shape";

export class Square extends Shape implements Locatable {
  private c: Context;
  private s: number;

  constructor(c: Context, x: number, y: number, s: number) {
    super(x, y);
    this.c = c;
    this.s = s;
  }

  public draw = () => {
    const { x, y, s } = this;
    const { ctx } = this.c;
    ctx.beginPath();
    const margin = s / 2;
    ctx.strokeRect(x - margin, y - margin, s, s);
  };

  public isOutOfBounds(direction: Direction): boolean {
    const { x, y, s } = this;
    const { cnv } = this.c;
    const margin = s / 2;
    switch (direction) {
      case Direction.UP:
        if (y <= margin) return true;
        break;
      case Direction.DOWN:
        if (y + margin > cnv.height) return true;
        break;
      case Direction.RIGHT:
        if (x + margin > cnv.width) return true;
        break;
      case Direction.LEFT:
        if (x <= margin) return true;
        break;
    }

    return false;
  }

  getCoordinates(): Point[] {
    const { x, y, s } = this;
    const margin = s / 2;
    return [
      { x: x - margin, y: y - margin },
      { x, y: y - margin },
      { x: x + margin, y: y - margin },

      { x: x - margin, y },
      { x, y },
      { x: x + margin, y },

      { x: x - margin, y: y + margin },
      { x: x, y: y + margin },
      { x: x + margin, y: y + margin },
    ];
  }
}
