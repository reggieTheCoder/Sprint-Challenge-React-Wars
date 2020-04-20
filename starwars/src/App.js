import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';

import './App.css';

import { Row, Col, Spinner, Button } from 'reactstrap';

const App = () => {
  const [apiData, setApiData] = useState(null);
  const [endpoint, setEndpoint] = useState('https://swapi.py4e.com/api/people/')
  // const [nextPage, setNextPage] = useState(null);
  // const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    axios.get(endpoint)
      .then(response => {
        console.log(response)
        setApiData(response.data);
      })
      .catch(err => console.log(err));
  }, [endpoint]);


  function next() {
    // console.log(apiData.next);
    // setNextPage(url);
    setEndpoint(apiData.next);
  }

  function prev() {
    // setPrevPage(url);
    setEndpoint(apiData.prev);
  }

  if (!apiData) return (
    <div className="loader-container">
      <Spinner color="light" style={{ width: '6rem', height: '6rem' }} />
    </div>
  )

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Row className="justify-content-center">
        <Col sm="6" md="5" lg="3" xl="2">
          <Button color="primary" onClick={() => next()} style={{ width: "100%", height: '50px' }}>Prev Page</Button>
        </Col>
        <Col sm="6" md="5" lg="3" xl="2">
          <Button color="primary" onClick={() => next()} style={{ width: "100%", height: '50px' }}>Next Page</Button>
        </Col>
      </Row>
      <Row>
        {
          apiData.results.map((character, idx) => {
            return (
              <Col sm="12" md="6" lg="4" xl="3" key={idx} >
                <Character data={character} />
              </Col>
            )
          })
        }
      </Row>
    </div >
  );
}

export default App;
