import * as React from "react";

type Cell = 1 | 2 | null

export type CellProps = {
  onClick: () => void;
  cell: Cell;
  indexRow: number;
  indexCollumn: number;
};

const Cell: React.FC<CellProps> = cellProps => {
  return (
    <td className="cell" onClick={cellProps.onClick}>
      {cellProps.cell === 1 ? "X" : cellProps.cell === 2 ? "O" : " "}
      {cellProps.indexRow + " " + cellProps.indexCollumn}
    </td>
  );
};

export default Cell;
