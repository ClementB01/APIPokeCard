import * as React from "react";
import Cell, { CellProps } from "./Cell";

export type RowProps = {
  onClick: CellProps["onClick"];
  owners: CellProps["owner"][];
};

const Row: React.FC<RowProps> = rowProps => {
  return (
    <tr>
      {rowProps.owners.map((owner, index) => (
        <Cell owner={owner} onClick={() => {}} />
      ))}
    </tr>
  );
};

export default Row;
