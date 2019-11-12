import * as React from "react";
import Row, { RowProps } from "./Row";
import TFoot from "./TFoot";

type Winner = 1 | 2 | null;

export type GameProps = {
  onClick: RowProps["onClick"];
  game: RowProps["row"][];
  winner: Winner;
};

const Game: React.FC<GameProps> = gameProps => {
  return (
    <table>
      <tbody>
        {gameProps.game.map((row, index) => (
          <Row row={row} onClick={() => {}} indexRow={index}/>
        ))}
      </tbody>
      <TFoot winner={gameProps.winner}/>
    </table>
  );
};

export default Game;
