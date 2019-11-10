import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


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

ReactDOM.render(<App onClick={() => {}} appGame={initialGame}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
