import { FC } from "react";

export interface ScoreHeaderProps {
  hitCount: number;
}

const ScoreHeader: FC<ScoreHeaderProps> = ({ hitCount }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        border: "solid",
        borderTopLeftRadius: "25px",
        borderTopRightRadius: "25px",
        padding: "1rem",
        backgroundColor: "lightcyan",
      }}
    >
      <h2>Score {hitCount}</h2>
    </div>
  );
};

export default ScoreHeader;
