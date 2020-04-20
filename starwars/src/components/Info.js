import React, {useState} from 'react'
import { Collapse,  Button, Col } from 'reactstrap';

function Info (props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
          <Button className="m-md-3" color="primary" onClick={toggle}>Characteristics</Button>
          <Collapse isOpen={isOpen}>
            <ul className="info">
              <li><span>Born:</span> {props.birth_year}</li>
              <li><span>Birth Gender:</span> {props.gender}</li>
              <li><span>Height (cm):</span> {props.height}</li>
              <li><span>Weight (kg):</span> {props.weight}</li>
              <li><span>Eye Color:</span> {props.eye_color}</li>
              <li><span>Hair Color:</span> {props.hair_color}</li>
            </ul>  
            </Collapse>
        </div> 
      )
    }


    export default Info;