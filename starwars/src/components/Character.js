import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap';
import Info from "./Info";
  

 function Character(props) {
  function makeid() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  //  console.log('log from character',  props.data)
   const name = props.data.name;
  
  return (
    <Card>
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
        
      </CardBody>
    </Card>
  )
  }

  


export default Character;
