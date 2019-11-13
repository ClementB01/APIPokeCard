import * as React from "react";

import { Owner } from './game_logique'

export type CellProps = {
  owner: Owner;
  onClick: () => void;
};

const Cell: React.FC<CellProps> = ({owner, onClick}) => {
  return (
    <td className="cell" onClick={onClick}>
      {owner === 1 ? "X" : owner === 2 ? "O" : " "}
    </td>
  );
};

export default Cell;
