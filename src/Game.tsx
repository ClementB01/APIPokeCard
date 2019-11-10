import * as React from "react";
import Row, { RowProps } from "./Row";

export type GameProps = {
  onClick: RowProps["onClick"];
  game: RowProps["row"][];
};

const Game: React.FC<GameProps> = gameProps => {
  return (
    <table>
      {gameProps.game.map((row, index) => (
        <Row row={row} onClick={() => {}} indexRow={index}/>
        ))}
    </table>
  );
};

export default Game;
