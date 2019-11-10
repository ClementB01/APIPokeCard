import React from "react";
import "./App.css";
import Game, { GameProps } from "./Game";


type AppProps = {
  onClick: GameProps["onClick"];
  appGame: GameProps["game"];
};

const App: React.FC<AppProps> = appProps => {
    return (
    <div className="App">
      <header className="App-header">
        <Game game={appProps.appGame} onClick={() => {}}></Game>
      </header>
    </div>
  );
};

export default App;
