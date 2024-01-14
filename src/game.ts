export enum Direction {
  UP = "up",
  DOWN = "down",
  RIGHT = "right",
  LEFT = "left",
}

export class Game {
  private ctx: CanvasRenderingContext2D;
  private x: number = 50;
  private y: number = 50;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  public move(direction: Direction) {
    switch (direction) {
      case Direction.RIGHT:
        this.x += 10;
        break;
      case Direction.LEFT:
        this.x -= 10;
    }

    drawCircle(this.ctx, this.x, this.y);
  }
}

const drawCircle = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 5 * Math.PI);
  ctx.stroke();
};
