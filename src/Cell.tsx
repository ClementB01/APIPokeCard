import * as React from "react";
import { constTicTacToes } from "./index"

type Cell = 1 | 2 | null

export type CellProps = {
  onClick: () => void;
  cell: Cell;
  indexRow: number;
  indexCollumn: number;
};

const Cell: React.FC<CellProps> = cellProps => {
  return (
    <td className="cell" onClick={() => constTicTacToes.play(constTicTacToes.initialGame, cellProps.indexRow, cellProps.indexCollumn)}>
      {cellProps.cell === 1 ? "X" : cellProps.cell === 2 ? "O" : " "}
    </td>
  );
};

export default Cell;
