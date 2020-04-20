import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Collapse, Button, CardBody, Card } from 'reactstrap';



 function Characteristics(props) {
    const [species, setSpecies] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
      axios
        .get(props.speciesUrl)
        .then(response => {
         setSpecies(response.data);
        })
        .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Button color="primary" onClick={toggle}>Species Data</Button>
      <Collapse isOpen={isOpen}>
      {
            <ul className="info">
              <li><span>Name:</span> {species.name}</li>
              <li><span>Classification:</span> {species.classification}</li>
              <li><span>Designation:</span> {species.designation}</li>
              <li><span>Average Height (cm):</span> {species.average_height}</li>
              <li><span>Average Lifespan (yrs):</span> {species.average_lifespan}</li>
              <li><span>Language:</span> {species.language}</li>
            </ul>
          
      }
      </Collapse>
    </div >
  )
}

export default Characteristics;