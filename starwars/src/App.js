import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';


const App = () => {
  const [apiData, setApiData] = useState([]);
 


  useEffect(() => {
    axios.get( 'https://swapi.py4e.com/api/people/')
      .then(response => {
        console.log(response.data)
        setApiData(response.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  // console.log(apiData)
    
      return (
        apiData.map((character, idx) => (
        <Character data={character} key ={idx} />
        
      
        ))
      )}





export default App;
