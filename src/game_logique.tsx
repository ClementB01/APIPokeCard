export type Cell = 1 | 2 | null;
export type Winner = Cell
export type Owner = Cell
export type Row = Cell[];
export type Line = Row;
export type Game = Row[];

export const initialGame: Game = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export const isFirstPlayerTurn = (game: Game): boolean => {
    const emptyCells = game
        .reduce<Cell[]>((acc, row) => acc.concat(row), [])
        .filter(cell => cell === null);

    return emptyCells.length % 2 !== 0;
};

export const getWinner = (game: Game): Winner => {
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

export const play = (game: Game, x: number, y: number) =>
  getWinner(game) || game[x][y]
    ? game
    : game.map((row, currentX) =>
        currentX !== x
          ? row
          : row.map((cell, currentY) =>
              currentY === y ? (isFirstPlayerTurn(game) ? 1 : 2) : cell
            )
      );
