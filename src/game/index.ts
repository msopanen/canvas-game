import { SoundPlayer } from "../sounds";
import { Direction, Point } from "../types";
import { Circle } from "./circle";
import { Square } from "./square";
import { getRandomInt, isCollision } from "../utils";

export class Context {
  public ctx: CanvasRenderingContext2D;
  public cnv: HTMLCanvasElement;
  public player: SoundPlayer;

  constructor(
    ctx: CanvasRenderingContext2D,
    cnv: HTMLCanvasElement,
    player: SoundPlayer,
  ) {
    this.ctx = ctx;
    this.cnv = cnv;
    this.player = player;
  }
}

export class Game {
  private c: Context;

  private direction: Direction = Direction.RIGHT;
  private circle: Circle;
  private square: Square;

  constructor(c: Context) {
    this.c = c;
    this.square = createRandomSquare(c);
    this.circle = new Circle(c, 25, 25, 25);
  }

  public move(direction: Direction) {
    this.direction = direction;
  }

  public animate() {
    const { width, height } = this.c.cnv;
    this.c.ctx.clearRect(0, 0, width, height);

    this.circle.move(this.direction);

    const { cx, cy, rad } = this.circle.getXYR();
    const points: Point[] = this.square.getCoordinates();

    const hit = isCollision(cx, cy, rad, points);

    if (hit) {
      this.c.player.playCollision();
      this.square = createRandomSquare(this.c);
    }

    this.square.draw();
    this.circle.draw();

    requestAnimationFrame(() => this.animate());
  }
}

const createRandomSquare = (c: Context) => {
  const n = getRandomInt(100, 400);
  const size = getRandomInt(10, 100);
  return new Square(c, n, n, size);
};
