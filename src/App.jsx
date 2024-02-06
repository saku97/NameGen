import React, { useState } from "react";
import "./App.css";

const generateName = async () => {
  try {
    const response = await fetch("http://localhost:5000/generateName");
    const data = await response.json();
    setGeneratedName(data.name);
  } catch (error) {
    console.error("Error fetching name:", error);
  }
};

function App() {
  const [generatedName, setGeneratedName] = useState("");

  const handleGenerateClick = () => {
    const newName = generateName();
    setGeneratedName(newName);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Name Generator</h1>
        <button onClick={handleGenerateClick}>Generate Name</button>
        {generatedName && <p>Generated Name: {generatedName}</p>}
      </header>
    </div>
  );
}

export default App;
