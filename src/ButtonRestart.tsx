import React from "react";
import { constTicTacToes } from "./index"


export type ButtonRestartProps = {
  onClick: () => void;
};

const ButtonRestart: React.FC<ButtonRestartProps> = buttonRestartProps => {
    return (
    <button onClick={() => constTicTacToes.reinitGame(constTicTacToes.initialGame)} children="Reset"></button>
  );
};

export default ButtonRestart;