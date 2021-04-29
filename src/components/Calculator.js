import React from "react";
import NumberButton from "./NumberButton";
import FunctionButton from "./FunctionButton";
import ClearButton from "./ClearButton";
import Display from "./Display";
import EqualButton from "./EqualButton";
import BackButton from "./BackButton";
import NegativeButton from "./NegativeButton";
import "./components.css";

const Calculator = () => {
  return (
    <div className="calculatorMain">
      <h1>Electronic Number Cruncher</h1>
      <div className="calculatorAll">
        <div className="calculatorDisplay">
          <Display />
        </div>
        <div className="calculatorButtons">
          <div className="buttonLine">
            <ClearButton />
            <BackButton />
            <NegativeButton />
            <FunctionButton buttonValue="/" />
          </div>

          <div className="buttonLine">
            <NumberButton buttonValue={7} />
            <NumberButton buttonValue={8} />
            <NumberButton buttonValue={9} />
            <FunctionButton buttonValue="*" />
          </div>

          <div className="buttonLine">
            <NumberButton buttonValue={4} />
            <NumberButton buttonValue={5} />
            <NumberButton buttonValue={6} />
            <FunctionButton buttonValue="-" />
          </div>

          <div className="buttonLine">
            <NumberButton buttonValue={1} />
            <NumberButton buttonValue={2} />
            <NumberButton buttonValue={3} />
            <FunctionButton buttonValue="+" />
          </div>

          <div className="buttonLine">
            <div className="zeroButton">
              <NumberButton buttonValue={0} />
            </div>
            <NumberButton buttonValue={"."} />
            <EqualButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
