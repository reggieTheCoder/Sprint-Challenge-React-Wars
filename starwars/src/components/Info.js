import React from 'react'
import { UncontrolledCollapse, Button } from 'reactstrap';

function Info (props) {
    return (
        <div>
          <Button color="primary" id={props.id} style={{ width: "100%" }}>Characteristics</Button>
        
            <ul className="info">
              <li><span>Born:</span> {props.birth_year}</li>
              <li><span>Birth Gender:</span> {props.gender}</li>
              <li><span>Height (cm):</span> {props.height}</li>
              <li><span>Weight (kg):</span> {props.weight}</li>
              <li><span>Eye Color:</span> {props.eye_color}</li>
              <li><span>Hair Color:</span> {props.hair_color}</li>
            </ul>
          
        </div>
        
      )
    }


    export default Info;