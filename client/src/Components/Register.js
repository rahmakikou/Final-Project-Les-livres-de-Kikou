import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { register } from '../Redux/Actions/AuthAction';

const Register=()=>{
    //states pour récupérer ce qui est ajouté dans le formulaire 

    const [image,setImage] = useState('')
    const [name,setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch() //faire fonctionner le bouton 
    const navigate = useNavigate()

    const handleRegister=(e)=>{
        e.preventDefault()
        dispatch(register({name,email,age,password},navigate))
    }
    return(
        
        <Form style={{margin:"50px", padding:"45px", backgroundColor:"#FFF3F5", borderRadius:"8%"}}>

        <Form.Group className="mb-3">
        <Form.Label style={{fontSize:"35px", fontFamily:"cursive", color:"#DE5D83", padding: "10px"}}>Photo de profil</Form.Label>
        <Form.Control style={{fontSize:"30px"}} onChange={(e)=>setImage(e.target.files[0])}type="file" placeholder="Choisisez une photo" />
        </Form.Group>

       
        <Form.Group className="mb-3">
        <Form.Label style={{fontSize:"35px", fontFamily:"cursive", color:"#DE5D83", padding: "10px"}}>Nom d'utilisateur</Form.Label>
        <Form.Control style={{fontSize:"30px"}} onChange={(e)=>setName(e.target.value)}type="text" placeholder="Entrez votre nom" />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label style={{fontSize:"35px", fontFamily:"cursive", color:"#DE5D83", padding: "10px"}}>Adresse email</Form.Label>
        <Form.Control style={{fontSize:"30px"}} onChange={(e)=>setEmail(e.target.value)}type="email" placeholder="Entrez votre email" />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label style={{fontSize:"35px", fontFamily:"cursive", color:"#DE5D83", padding: "10px"}}>Age</Form.Label>
        <Form.Control style={{fontSize:"30px"}} onChange={(e)=>setAge(e.target.value)}type="email" placeholder="Entrez votre âge" />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label style={{fontSize:"35px", fontFamily:"cursive", color:"#DE5D83", padding: "10px"}}>Mot de passe</Form.Label>
        <Form.Control style={{fontSize:"30px"}} onChange={(e)=>setPassword(e.target.value)}type="password" placeholder="Définissez un mot de passe" />
        </Form.Group> 

      <Button onClick={(e)=>handleRegister(e)} style={{margin:"40px", fontSize:"30px", color: "#FC8EAC", backgroundColor:"pink"}} type="submit">
       Valider
      </Button>
    </Form>
    )
}

export default Register 