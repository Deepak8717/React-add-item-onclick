import React, { useState } from "react";

function App() {
  const [responses, setResponses] = useState([]);
  const [response, setResponse] = useState("");

  function addResponse() {
    setResponses([...responses, { name: response }]);
  }
  function deleteResponse(itemIndex) {
    const newResponses = responses.filter((item, index) => index !== itemIndex);
    setResponses(newResponses);
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <input
          name="response"
          onChange={(e) => {
            setResponse(e.target.value);
          }}
          value={response}
        />
        <button onClick={addResponse}>Add</button>
        {responses.map(({ name }, index) => (
          <div>
            <span>{name}</span>
            <button onClick={() => deleteResponse(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
