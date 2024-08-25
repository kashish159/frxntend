import React, { useState } from 'react';

const InputField = ({ handleSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    handleSubmit(event, selectedOptions);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter JSON data"
        />
        <button type="submit">Submit</button>
        {error && <div style={{ color: 'red' }}>{error.message}</div>}
      </form>
    </div>
  );
};

export default InputField;