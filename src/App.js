import React, { useState } from 'react';
import InputField from './InputField';
import Dropdown from './Dropdown';

const App = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [responseOutput, setResponseOutput] = useState({});

  const handleSubmit = (event, selectedOptions) => {
    event.preventDefault();
    const jsonData = event.target.inputValue.trim();
    if (!jsonData) {
      setError({ message: 'Please enter valid JSON data' });
      return;
    }

    try {
      const data = JSON.parse(jsonData);
    
      fetch('/bfhl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
      })
        .then((response) => response.json())
        .then((responseData) => {
          const responseOutput = {};
          if (selectedOptions.includes('Alphabets')) {
            responseOutput.alphabets = responseData.alphabets;
          }
          if (selectedOptions.includes('Numbers')) {
            responseOutput.numbers = responseData.numbers;
          }
          if (selectedOptions.includes('Highest Lowercase Alphabet')) {
            responseOutput.highest_lowercase_alphabet = responseData.highest_lowercase_alphabet;
          }
          setResponseOutput(responseOutput);
        })
        .catch((error) => {
          setError({ message: 'Error processing request' });
        });
    } catch (error) {
      setError({ message: 'Invalid JSON data' });
    }
  };

  return (
    <div>
      <InputField handleSubmit={handleSubmit} />
      <Dropdown selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
      {responseOutput && (
        <div>
          <h4>Response Output:</h4>
          {Object.keys(responseOutput).map((key) => (
            <div key={key}>
              <h5>{key}:</h5>
              <ul>
                {responseOutput[key].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;