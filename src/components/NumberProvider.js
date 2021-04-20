/* This component houses all the functionality for the numbers/input entered */

import React, {useState} from 'react';
export const NumberContext = React.createContext(); /* Creating context to pass props/data */
/* Context provides a way to pass data through the component tree without having to pass props down manually at every level */

const NumberProvider = props => { /* declaring the data that we want available throughout our component tree */
    const [number, setNumber] = useState(''); /* Setting state */
    const [storedNumber, setStoredNumber] = useState('');
    const [functionType, setFunctionType] = useState('');

    const handleSetDisplayValue = num => { /* Used in NumberButton. Checks the number has correct length/number of decimals when number button pressed*/
        if ((!number.includes('.') || num !== '.') && number.length <8) {
            setNumber(`${(number + num).replace(/^0+/, '')}`);
        }
    };

    const handleSetStoredValue = () => {
        setStoredNumber(number); /* storing the numbers entered in the calculator */
        setNumber(''); /* resets number after storing it */
    };

    const handleClearValue = () => { /* clears values */
        setNumber('');
        setStoredNumber('');
        setFunctionType('');
    };

    const handleBackButton = () => {
        if (number !== '') { /* if num = not empty, then take number at position 0 and at number length - 1. setNumber = num - 1 (the previous entered number). */
            const deletedNumber = number.slice(0,number.length - 1);
            setNumber(deletedNumber);
        }
    };

    const handleSetCalcFunction = type => { // For Function Button. Sets if you are adding, subtracting, dividing, or multiplying
        if (number) {
            setFunctionType(type); // sets function type from type passed in e.g. + or - 
            handleSetStoredValue(); // stores value 
        }
        if (storedNumber) {
            setFunctionType(type);
        }
    }

    const handleToggleNegative = () => { // Toggles Neg Button
        if (number) {
            if (number > 0) { // if num larger than 0 number equals -'num' eg. -2
                setNumber(`-${number}`);
            } else { // else num 0 then extract number after 0 = 1 (position 1)
                const positiveNumber = number.slice(1);
                setNumber(positiveNumber);
            }
        } else if (storedNumber > 0) { // if stored number larger than 0, stored num equals -'stored num'
            setStoredNumber(`-${storedNumber}`);
        } else { // if stored num = 0, extract num after 0 at position 1 = 1
            const positiveNumber = storedNumber.slice(1);
            setStoredNumber(positiveNumber);
        }
    };

    const doMath = () => { // for Equal Button
        if (number && storedNumber) {
            switch(functionType) { // switch statement. inside the () goes what you want to check against.
                case '+': // if functionType = +, setStoredNumber = storedNumber + number x 100 / 100 
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`);
                    break; // stops running the rest of the code and jumps to the end  
                case '-':
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`);
                    break;
                case '/':
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`);
                    break;
                case '*':
                    setStoredNumber(`${Math.round(`${parseFloat(storedNumber) * parseFloat(number) * 1000}`) / 1000}`);
                    break;
                    default: // means 'else'. if nothing matches, it will go to this (empty)
                    break;
            }
            setNumber('');
        }
    }


    return ( // Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
        // The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider.
        <NumberContext.Provider
        value={{
            functionType,
            number,
            storedNumber,
            handleSetDisplayValue,
            handleSetCalcFunction,
            handleToggleNegative,
            handleBackButton,
            handleClearValue,
            doMath,
        }}
        >
            {props.children}
        </NumberContext.Provider>
    );
};

export default NumberProvider;

