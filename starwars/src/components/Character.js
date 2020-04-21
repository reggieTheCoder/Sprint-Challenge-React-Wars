import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap';
import Info from "./Info";
import Species from "./Species"

 function Character(props) {
  //  console.log('log from character',  props.data)
   const name = props.data.name;
  
  return (
    <div className="p-md-5"> 
       <Card className = "col px-md-3 pt-md-1">
      <CardBody>
        <CardTitle>Character Name: {name} </CardTitle>
        <Info 
        birth_year={props.data.birth_year} 
        gender={props.data.gender}
        height={props.data.height}
        weight={props.data.mass}
        eye_color={props.data.eye_color}
        hair_color={props.data.hair_color} 
        />
        <Species
        speciesUrl={props.data.species[0]}
        />
      </CardBody>
    </Card>
    </div>

  )
  }

  


export default Character;
