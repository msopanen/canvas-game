export enum Direction {
  UP = "up",
  DOWN = "down",
  RIGHT = "right",
  LEFT = "left",
}

export class Game {
  private ctx: CanvasRenderingContext2D;
  private cnv: HTMLCanvasElement;
  private circle: Circle;
  private direction: Direction = Direction.RIGHT;

  constructor(ctx: CanvasRenderingContext2D, cnv: HTMLCanvasElement) {
    this.ctx = ctx;
    this.cnv = cnv;
    this.circle = new Circle(ctx, this.cnv.width, this.cnv.height);
  }

  public move(direction: Direction) {
    this.direction = direction;
  }

  public animate() {
    this.ctx.clearRect(0, 0, this.cnv.width, this.cnv.height);
    this.circle.move(this.direction);
    requestAnimationFrame(() => this.animate());
  }
}

export class Circle {
  private ctx: CanvasRenderingContext2D;
  private radius: number = 10;
  private width: number;
  private height: number;
  private x: number = 50;
  private y: number = 50;

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
  }

  public move = (direction: Direction) => {
    switch (direction) {
      case Direction.UP:
        if (this.y > this.radius) {
          this.y -= 1;
        }
        break;
      case Direction.DOWN:
        if (this.y + this.radius < this.height) {
          this.y += 1;
        }
        break;
      case Direction.RIGHT:
        if (this.x + this.radius < this.width) {
          this.x += 1;
        }
        break;
      case Direction.LEFT:
        if (this.x > this.radius) {
          this.x -= 1;
        }
        break;
    }

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.stroke();
  };
}

/*const clearCircle = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
  ctx.save();
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 5);
  ctx.stroke();
  ctx.fill();
  ctx.restore();
};*/
