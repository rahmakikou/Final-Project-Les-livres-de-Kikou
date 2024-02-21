import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { login } from '../Redux/Actions/AuthAction';
 
const Login=()=>{
    //states pour récupérer ce qui est ajouté dans le formulaire 

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch() //faire fonctionner le bouton 
    const navigate = useNavigate()

     const handleLogin=(e)=>{
        e.preventDefault()
        dispatch(login({email,password}, navigate))
     }

    return(
        
        <Form style={{margin:"100px", padding: "80px", backgroundColor:"#FFF3F5", borderRadius:"8%"}}>

        <Form.Group className="mb-3">
        <Form.Label style={{fontSize:"40px", color: "plum", fontFamily:"fantasy"}}>Adresse Email</Form.Label>
        <Form.Control style={{fontSize:"30px"}} onChange={(e)=>setEmail(e.target.value)}type="email" placeholder="Entrez votre email" />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label style={{fontSize:"40px", color: "plum", fontFamily:"fantasy", marginTop:"30px"}}>Mot de passe</Form.Label>
        <Form.Control style={{fontSize:"30px"}} onChange={(e)=>setPassword(e.target.value)}type="password" placeholder="Entrez votre mot de passe..." />
        </Form.Group> 

      <Button style={{fontSize:"30px", color: "#C64B8C", fontFamily:"fantasy", backgroundColor:"	#FFB6C1", marginTop:"30px"}} onClick={(e)=>handleLogin(e)} type="submit">
       Entrer 
      </Button>
    </Form>
    )
}

export default Login