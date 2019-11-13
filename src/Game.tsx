import React from "react";
import "./Game.css";
import Row from "./Row";
import TFoot from "./TFoot";
import ButtonRestart from './ButtonRestart'

import { getWinner, initialGame, play} from './game_logique'

type GameProps = {};

const Game: React.FC<GameProps> = () => {
  const [game, setGame] = React.useState(initialGame);
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tbody>
            {game.map((row, index) => (
              <Row key={index} row={row} onCellClick={(y: number) => setGame(play(game,index, y))}/>
            ))}
          </tbody>
          <TFoot winner={getWinner(game)}/>
        </table>
        <ButtonRestart onButtonClick={() => setGame(initialGame)}/>
      </header>
    </div> 
  );
};

export default Game;
