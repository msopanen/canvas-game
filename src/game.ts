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

  private square: Square;

  constructor(ctx: CanvasRenderingContext2D, cnv: HTMLCanvasElement) {
    this.ctx = ctx;
    this.cnv = cnv;
    this.circle = new Circle(ctx, this.cnv.width, this.cnv.height);
    this.square = new Square(ctx, 50, this.cnv.width, this.cnv.height);
  }

  public move(direction: Direction) {
    this.direction = direction;
  }

  public animate() {
    this.ctx.clearRect(0, 0, this.cnv.width, this.cnv.height);
    this.circle.move(this.direction);

    const c = isCollision(this.square, this.circle);

    if (c) {
      this.square = new Square(
        this.ctx,
        getRandomInt(200),
        this.cnv.width,
        this.cnv.height,
      );
    }

    this.square.draw();

    requestAnimationFrame(() => this.animate());
  }
}

const isCollision = (square: Square, circle: Circle) => {
  const s = square.getXyz();
  const c = circle.getXyz();
  return (
    c.x + c.z >= s.x &&
    c.x - c.z <= s.x + s.z &&
    c.y + c.z >= s.y &&
    c.y - c.z <= s.y + s.z
  );
};

export class Circle {
  private ctx: CanvasRenderingContext2D;
  private radius: number;
  private width: number;
  private height: number;
  private x: number = 50;
  private y: number = 50;

  constructor(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    radius: number = 10,
  ) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.radius = radius;
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

  public getXyz = () => {
    return { x: this.x, y: this.y, z: this.radius };
  };
}

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export class Square {
  private size: number = 10;
  private ctx: CanvasRenderingContext2D;
  private x: number;
  private y: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    size: number = 10,
    maxWidth: number,
    maxHeight: number,
  ) {
    this.ctx = ctx;
    this.size = size;
    this.x = getRandomInt(maxWidth - size);
    this.y = getRandomInt(maxHeight - size);
  }

  public draw = () => {
    this.ctx.beginPath();
    this.ctx.strokeRect(this.x, this.y, this.size, this.size);
  };

  public getXyz = () => {
    return { x: this.x, y: this.y, z: this.size };
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
