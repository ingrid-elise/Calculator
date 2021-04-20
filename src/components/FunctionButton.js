import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import './components.css';


// for +, -, divide and multiply buttons 
// function detects if +/-/*/divide then uses the correct function type in the calculation

const FunctionButton = ({ buttonValue }) => {
    const { handleSetCalcFunction } = useContext(NumberContext);
    return (
        <button 
        className="functionButton" 
        type="button" 
        onClick={() => handleSetCalcFunction(buttonValue)
        }>
            {buttonValue}
        </button>
    )
}

export default FunctionButton;