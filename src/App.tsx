import { FC, useState } from "react";
import GameBoard from "./components/GameBoard";
import StartGameModal from "./components/StartGameModal";
import ScoreHeader from "./components/ScoreHeader";

const App: FC = () => {
  const [start, setStart] = useState(false);
  const [hitCount, setHitCount] = useState(0);

  const handleStart = () => {
    setStart(true);
    setHitCount(0);
  };
  const handleStop = () => {
    setStart(false);
  };

  const handleHit = () => {
    setHitCount((prev) => prev + 1);
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ScoreHeader hitCount={hitCount} />
      <div
        id="game-board"
        style={{
          height: "500px",
          border: "solid",
        }}
      >
        <GameBoard start={start} onStop={handleStop} onHit={handleHit} />
        <StartGameModal show={!start} onStart={handleStart} />
      </div>
    </div>
  );
};

export default App;
