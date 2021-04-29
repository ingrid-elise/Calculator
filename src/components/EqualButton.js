import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import "./components.css";

const EqualButton = () => {
  const { doMath } = useContext(NumberContext);
  return (
    <button className="equalButton" type="button" onClick={() => doMath()}>
      =
    </button>
  );
};

export default EqualButton;
