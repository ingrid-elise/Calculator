import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import "./components.css";

const ClearButton = () => {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <button
      type="button"
      className="clearButton"
      onClick={() => handleClearValue()}
    >
      C
    </button>
  );
};

export default ClearButton;
