import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import "./components.css";

const NegativeButton = () => {
  const { handleToggleNegative } = useContext(NumberContext);
  return (
    <button
      type="button"
      className="negativeButton"
      onClick={() => handleToggleNegative()}
    >
      -/+
    </button>
  );
};

export default NegativeButton;
