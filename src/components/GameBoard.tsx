import { FC, useEffect, useRef } from "react";
import { Direction, Game } from "../game";

const GameBoard: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const gameRef = useRef<Game | null>(null);

  useEffect(() => {
    if (canvasRef.current === null) {
      throw new Error("Could not initialize canvas");
    }

    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;

    contextRef.current = canvasRef.current.getContext("2d");

    if (contextRef.current === null) {
      throw new Error("Could not get 2D context");
    }

    gameRef.current = new Game(contextRef.current);

    window.onkeydown = (e) => {
      switch (e.key) {
        case "w":
        case "ArrowUp":
          console.log("UP");
          gameRef.current?.move(Direction.UP);
          break;
        case "s":
        case "ArrowDown":
          console.log("DOWN");
          gameRef.current?.move(Direction.DOWN);
          break;
        case "d":
        case "ArrowRight":
          console.log("RIGHT");
          gameRef.current?.move(Direction.RIGHT);
          break;
        case "a":
        case "ArrowLeft":
          console.log("LEFT");
          gameRef.current?.move(Direction.LEFT);
          break;
        case "Escape":
          console.log("ESC");
          break;
        default:
          break;
      }
    };

    /*const draw = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.width);
      context.beginPath();

      context.arc(x, y, 10, 0, 5 * Math.PI);
      //context.fillStyle = 'red';
      //context.fill();
      context.stroke();
    };

    canvas.addEventListener("mousemove", draw);
    return () => {
      canvas.removeEventListener("mousemove", draw);
    };*/
  }, []);

  return <canvas ref={canvasRef} />;
};

export default GameBoard;

const drawCircle = (cnv: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.arc(100, 100, 10, 0, 5 * Math.PI);
  ctx.stroke();
};
/*
    window.onkeydown = (e) => {
      switch (e.key) {
        case "w":
        case "ArrowUp":
          console.log("UP");
          break;
        case "s":
        case "ArrowDown":
          console.log("DOWN");
          break;
        case "d":
        case "ArrowRight":
          console.log("RIGHT");
          break;
        case "a":
        case "ArrowLeft":
          console.log("LEFT");
          break;
        case "Escape":
          console.log("ESC");
          break;
        default:
          break;
      }
    };
*/
