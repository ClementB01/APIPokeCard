import React from "react";

export type ButtonRestartProps = {
  onButtonClick: () => void;
};

const ButtonUndo: React.FC<ButtonRestartProps> = ({onButtonClick}) => {
    return (
    <button onClick={() => onButtonClick()}>Undo</button>
  );
};

export default ButtonUndo;