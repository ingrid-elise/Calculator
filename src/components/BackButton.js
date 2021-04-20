import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import './components.css';

const BackButton = () => {
    const { handleBackButton } = useContext(NumberContext); // function from NumberProvider.js component
    return (
      <button // on click, runs function
      type="button" 
      className="backButton" 
      onClick={() => handleBackButton()}> 
        &#8592;
      </button>
    );
  };

export default BackButton;