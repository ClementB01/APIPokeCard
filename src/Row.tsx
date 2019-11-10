import * as React from "react";
import Cell, { CellProps } from "./Cell";

export type RowProps = {
  onClick: CellProps["onClick"];
  row: CellProps["cell"][];
  indexRow: number
};

const Row: React.FC<RowProps> = rowProps => {
  return (
    <tr>
      {rowProps.row.map((cell, index) => (
        <Cell cell={cell} onClick={() => {}} indexRow={rowProps.indexRow} 
          indexCollumn={index} />
      ))}
    </tr>
  );
};

export default Row;
