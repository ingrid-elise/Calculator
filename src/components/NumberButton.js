import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import "./components.css";

const CalculatorButton = ({ buttonValue }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button
      className="numberButton"
      type="button"
      onClick={() => handleSetDisplayValue(buttonValue)}
    >
      {buttonValue}
    </button>
  );
};

export default CalculatorButton;
