import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ['Alphabets', 'Numbers', 'Highest Lowercase Alphabet'];

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <h4>Select options:</h4>
      {options.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            checked={selectedOptions.includes(option)}
            onChange={() => handleOptionChange(option)}
          />
          <span>{option}</span>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;