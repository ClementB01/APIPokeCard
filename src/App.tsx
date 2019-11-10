import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GameHtml, { GameProps } from "./Game"
import Game from "./Game";

/*type AppProps = {
  name: string;
  entier: number;
};*/

type Cell = 1 | 2 | null
type Owner = Cell
type Winner = Cell
type Row = Cell[]
type Line = Row
type Game = Row[]
​
const initialGame: Game = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Game rows={initialGame} onClick={() => {}}></Game>
      </header>
    </div>
  );
};

export default App;
