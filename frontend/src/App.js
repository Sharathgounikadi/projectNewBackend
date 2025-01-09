import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error("Error fetching data", error));
  }, [data]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToAdd = { content: newData };

    axios.post('http://localhost:5000/api/data', dataToAdd)
      .then(response => {
        setData([...data, response.data]);
        setNewData(""); 
      })
      .catch(error => console.error("Error adding data", error));
  };

  return (
    <div>
      <h1>Dynamic Data</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newData}
          onChange={(e) => setNewData(e.target.value)}
          placeholder="Add new data"
        />
        <button type="submit">Add</button>
      </form>

      <h2>Fetched Data:</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
