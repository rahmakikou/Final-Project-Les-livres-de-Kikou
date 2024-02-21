import { useDispatch, useSelector } from "react-redux"
import { deleteOneUser, deleteProfil, getOneProfil } from "../Redux/Actions/AuthAction"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/esm/Button'; 
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'; 


const OneUser=()=>{

    const {id}= useParams() 
    const dispatch= useDispatch() 

    useEffect(()=>{
        dispatch(getOneProfil(id))
      },[])

      const oneUser = useSelector(state=>state.AuthReducer.oneUser) 
    
      const navigate = useNavigate()
      return(
          <Card style={{ width: '18rem', margin: "30px" }}>
      <Card.Img variant="top" src={oneUser.image}/>
      <Card.Body>
        <br/>
       <Link to={`/OneUser/${oneUser._id}`}> <Card.Title style={{color:"purple", fontSize: "45px", fontFamily:"fantasy"}}>{oneUser.name}</Card.Title></Link> 
        <br/>
        <Card.Text style={{color:"#C71585", fontSize: "35px", fontFamily:"cursive"}}>
        {oneUser.email}
        </Card.Text>
        <Card.Text style={{color: "#8B008B",fontSize: "25px", fontFamily:"cursive"}}>
        {oneUser.age}
        </Card.Text>
        <div className='fless'> 
        <Button  variant="outline-danger" onClick={()=>dispatch(deleteOneUser(oneUser._id,navigate))}>Supprimer le Profil</Button>
      </div>
      </Card.Body>
    </Card>
    )
}


export default OneUser 