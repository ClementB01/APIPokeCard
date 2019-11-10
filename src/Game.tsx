import * as React from "react";
import Row, { RowProps } from "./Row";

export type GameProps = {
  onClick: RowProps["onClick"];
  rows: RowProps["owners"][];
};

const Game: React.FC<GameProps> = gameProps => {
  return (
    <table>
      {gameProps.rows.map((row, index) => (
        <Row owners={row} onClick={() => {}} />
      ))}
    </table>
  );
};

export default Game;
