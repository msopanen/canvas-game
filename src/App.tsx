import { FC } from "react";
import GameBoard from "./components/GameBoard";

const style = {
  width: "500px",
  height: "500px",
  border: "solid",
};
const App: FC = () => {
  return (
    <div id="game-board" style={style}>
      <GameBoard />
    </div>
  );
};

export default App;
