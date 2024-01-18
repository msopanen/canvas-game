import { FC } from "react";

export interface StartGameModalProps {
  show: boolean;
  onStart: () => void;
}

const StartGameModal: FC<StartGameModalProps> = ({ show, onStart }) => {
  return (
    <div
      id="start-game-modal-outer"
      style={{
        display: show ? "flex" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        placeContent: "center",
      }}
    >
      <div
        id="start-game-modal-inner"
        style={{
          display: "flex",
          flexDirection: "column",
          placeItems: "center",
          zIndex: 999,
          border: "solid",
          borderRadius: "25px",
          margin: "5rem",
          padding: "2rem",
          backgroundColor: "lightcyan",
        }}
      >
        <h2>Start new game</h2>
        Move ball with arrow keys left, up, right, down <br />
        and eat square. Stop game by pressing Esc.
        <br />
        <button style={{ marginTop: "2rem" }} onClick={onStart}>
          Start
        </button>
      </div>
    </div>
  );
};

export default StartGameModal;
