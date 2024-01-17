import { FC, useEffect, useRef } from "react";
import { Game, Context } from "../game";
import { Direction } from "../types";
import { SoundPlayer } from "../sounds";

const GameBoard: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const gameRef = useRef<Game | null>(null);

  useEffect(() => {
    if (canvasRef.current === null) {
      throw new Error("Could not initialize canvas");
    }

    const gameBoard = document.getElementById("game-board");

    if (!gameBoard) {
      throw new Error("Could not get game board width");
    }

    canvasRef.current.width = gameBoard.clientWidth;
    canvasRef.current.height = gameBoard.clientHeight;

    contextRef.current = canvasRef.current.getContext("2d");

    if (contextRef.current === null) {
      throw new Error("Could not get 2D context");
    }

    const ctx = new Context(
      contextRef.current,
      canvasRef.current,
      new SoundPlayer(),
    );

    gameRef.current = new Game(ctx);

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

    requestAnimationFrame(() => gameRef.current?.animate());
  }, []);

  return <canvas ref={canvasRef} />;
};

export default GameBoard;

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
