import { FC, useState } from "react";
import GameBoard from "./components/GameBoard";
import StartGameModal from "./components/StartGameModal";

const style = {
  width: "100%",
  height: "500px",
  border: "solid",
};
const App: FC = () => {
  const [start, setStart] = useState(false);

  return (
    <div id="game-board" style={style}>
      <GameBoard start={start} onStop={() => setStart(false)} />
      <StartGameModal show={!start} onStart={() => setStart(true)} />
    </div>
  );
};

export default App;
