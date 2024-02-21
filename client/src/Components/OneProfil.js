

import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import Button from 'react-bootstrap/esm/Button'; 
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
 

const OneProfil=({el})=>{

    const dispatch = useDispatch()

    return(

                  <Card style={{ width: '18rem', margin: "30px" }}>
      <Card.Img variant="top" src= {el.image}/>
      <Card.Body>
        <br/>
       <Link to={`/OneUser/${el._id}`}> <Card.Title style={{color:"purple", fontSize: "45px", fontFamily:"fantasy"}}>{el.name}</Card.Title></Link> 
        <br/>
        <Card.Text style={{color:"#C71585", fontSize: "35px", fontFamily:"cursive"}}>
        {el.email}
        </Card.Text>
        <Card.Text style={{color: "#8B008B",fontSize: "25px", fontFamily:"cursive"}}>
        {el.age}
        </Card.Text>
      </Card.Body>
    </Card>
            
    ) 
}

export default OneProfil 