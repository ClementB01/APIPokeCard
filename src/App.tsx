import React from "react";
import "./App.css";
import Game, { GameProps } from "./Game";


type Winner = 1 | 2 | null;

type AppProps = {
  onClick: GameProps["onClick"];
  appGame: GameProps["game"];
  winner: Winner;
};

const App: React.FC<AppProps> = appProps => {
    return (
        <Game game={appProps.appGame} onClick={() => {}} 
          winner={appProps.winner}></Game>
  );
};

export default App;
