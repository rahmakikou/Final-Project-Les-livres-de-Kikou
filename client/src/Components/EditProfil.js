import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { current, editProfil, getOneProfil } from '../Redux/Actions/AuthAction'
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/esm/Button'; 
import { useNavigate, useParams } from 'react-router-dom';



const EditProfil=()=>{

    const dispatch = useDispatch()  
    useEffect(()=>{
        dispatch(current())
    },[]) 

    const user = useSelector(state=>state.AuthReducer.user)
    
    const [image, setImage] = useState('') 
    const [name, setName] = useState(user.name)
    const [email,setEmail]= useState(user.email)
    const [age,setAge] = useState(user.age)  
   
    useEffect(()=>{

        setImage(user.image) 
        setName(user.name)
        setEmail(user.email)
        setAge(user.age)
    },[user])  

    const navigate = useNavigate() 

    const handleEdit=(e)=>{
        e.preventDefault()
        dispatch(editProfil(user._id,{name,email,age,image},navigate))
    }
     

    return(
        <div>
             <Form style={{margin:"40px", padding:"50px", backgroundColor:"#FFF3F5", borderRadius:"8%"}}>
      
             <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"30px", fontFamily:"cursive", color:"#DE5D83"}}>Image de Profil </Form.Label>
        <Form.Control onChange={(e)=>setImage(e.target.files[0])} type="file" placeholder="Choisir une photo" />
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"30px", fontFamily:"cursive", color:"#DE5D83"}}>Nom</Form.Label>
        <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Ecrire nom" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"30px", fontFamily:"cursive", color:"#DE5D83"}}>Prénom</Form.Label>
        <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)}  type="text" placeholder="Ecrire prénom" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"30px", fontFamily:"cursive", color:"#DE5D83"}}>Âge</Form.Label>
        <Form.Control value={age} onChange={(e)=>setAge(e.target.value)}  type="number" placeholder="Ecrire votre âge" />
      </Form.Group>

     
      <div className='profile1'>
        <br/> 
      <Button style={{fontSize:"20px", color: "#C64B8C", fontFamily:"fantasy", backgroundColor:"	#FFB6C1", marginTop:"30px"}} onClick={(e)=>handleEdit(e)}>Confirmer la modification</Button> 

        </div>

      </Form>  
             
            
        </div>
    )
}

export default EditProfil