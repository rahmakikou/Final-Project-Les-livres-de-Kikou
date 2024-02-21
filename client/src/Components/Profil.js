
import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { current, deleteProfil } from '../Redux/Actions/AuthAction'
 
import Button from 'react-bootstrap/esm/Button'; 
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';



const Profil=()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(current())
    },[])

    const user = useSelector(state=>state.AuthReducer.user)
    
  
    const navigate = useNavigate()

   

    return(
        <div style={{display:"flex", justifyContent: "center"}}>
                  <Card style={{ width: '18rem', margin: "30px" }}>
      <Card.Img variant="top" src={user.image}  />
      <Card.Body>
        <br/>
        <Card.Title style={{color:"purple", fontSize: "45px", fontFamily:"fantasy"}}>{user.name}</Card.Title>
        <br/>
        <Card.Text style={{color:"#C71585", fontSize: "35px", fontFamily:"cursive"}}>
        {user.email}
        </Card.Text>
        <Card.Text style={{color: "#8B008B",fontSize: "25px", fontFamily:"cursive"}}>
        {user.age}
        </Card.Text>
        <div className='fless'> 
        <Button  variant="outline-danger" onClick={()=>dispatch(deleteProfil(user._id,navigate))}>Supprimer le Profil</Button>
      </div>
      </Card.Body>
    </Card>
             
             
              



            <div className='profile1'>

      </div>
        </div> 
    )
}

export default Profil 