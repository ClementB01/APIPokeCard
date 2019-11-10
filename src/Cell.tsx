import * as React from "react";

type Owner = 1 | 2 | null;

export type CellProps = {
  onClick: () => void;
  owner: Owner;
};

const Cell: React.FC<CellProps> = cellProps => {
  return (
    <td className="cell" onClick={cellProps.onClick}>
      {cellProps.owner === 1 ? "X" : cellProps.owner === 2 ? "O" : " "}
    </td>
  );
};

export default Cell;
