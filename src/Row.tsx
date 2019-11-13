import * as React from "react";
import Cell, { CellProps } from "./Cell";

export type RowProps = {
  row: CellProps["owner"][];
  onCellClick: (y: number) =>  void;
};

const Row: React.FC<RowProps> = ({onCellClick, row}) => {
  return (
    <tr>
      {row.map((cell, index) => (
        <Cell key={index} owner={cell} onClick={() => onCellClick(index)}/>
      ))}
    </tr>
  );
};

export default Row;
