import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap';

  

 function Character(props) {
   console.log('log from character',  props.data)
   const name = props.data.name;
  
  return (
    <Card>
      <CardBody>
  <CardTitle>Character Name: {name} </CardTitle>
      </CardBody>
    </Card>
  )
  }

  


export default Character;
