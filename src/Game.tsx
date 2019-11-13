import React from "react";
import "./Game.css";
import Row from "./Row";
import TFoot from "./TFoot";
import ButtonRestart from './ButtonRestart'

import { getWinner, initialGame, play, Game} from './game_logique'
import ButtonUndo from "./ButtonUndo";

type GameProps = {};

const GameFinal: React.FC<GameProps> = () => {
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
        <span>
         
          <ButtonRestart onButtonClick={() => setGame(initialGame)}/>
        </span>
      </header>
    </div> 
  );
};

export default GameFinal;
//<ButtonUndo onButtonClick={() => setGame(historique[historique.length - 1])}/>