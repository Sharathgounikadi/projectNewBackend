import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Get from './Get';

function App() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();
    const dataToAdd = { content: newData };

    axios.post('https://projectnewbackend.onrender.com/api/data', dataToAdd)
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
      <Get apidata={data}/>
    </div>
  );
}

export default App;
