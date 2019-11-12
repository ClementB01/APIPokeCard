import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ButtonRestart from './ButtonRestart'


type Cell = 1 | 2 | null;
type Winner = Cell
type Owner = Cell
type Row = Cell[];
type Line = Row;
type Game = Row[];

const initialGame: Game = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];


const isFirstPlayerTurn = (game: Game): boolean => {
    const emptyCells = game
        .reduce<Cell[]>((acc, row) => acc.concat(row), [])
        .filter(cell => cell === null);

    return emptyCells.length % 2 !== 0;
};

const getWinner = (game: Game): Winner => {
    const getOwner = (line: Line): Owner =>
    line.every(cell => cell === line[0]) ? line[0] : null;

    const columns = game.map((_, y) => game.map((_, x) => game[x][y]));
    const diagonals = [
    game.map((_, y) => game[y][y]),
    game.map((_, y) => game[y][2 - y])
    ];
    const lines = [...game, ...columns, ...diagonals];

    return lines.reduce<Owner>((winner, line) => winner || getOwner(line), null);
};

const play = (game: Game, x: number, y: number) => {
    if (!getWinner(game) && !game[x][y]) {
    game[x][y] = isFirstPlayerTurn(game) ? 1 : 2;
    ReactDOM.render(createGame(initialGame), document.getElementById('root'));
    }
};

const reinitGame = (game: Game) => {
    game.map((row, x) => row.map((cell, y) => game[x][y] = null))
    ReactDOM.render(createGame(game), document.getElementById('root'));
 }

//Le boutton reset ne fonction pas
function createGame(game: Game) {
    return(
        <div className="App">
            <header className="App-header">
                <App onClick={() => {}} appGame={game} winner={getWinner(game)}/>
                <ButtonRestart onClick={() => {}}/>
            </header>
        </div>
    );
    
}

ReactDOM.render(createGame(initialGame), document.getElementById('root'));


export const constTicTacToes = {
    initialGame,
    play,
    getWinner,
    createGame,
    reinitGame
}

//export default createGame; 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
