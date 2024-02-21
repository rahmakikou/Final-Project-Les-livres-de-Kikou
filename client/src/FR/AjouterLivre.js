

import { useState } from 'react';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/esm/Button';
import { useDispatch } from 'react-redux';
import { ajouterLivre } from '../Redux/Actions/LivreAction';
import { useNavigate } from 'react-router-dom';
  

const AjouterLivre=()=>{

const [image, setImage] = useState('')
const [titre,setTitre]= useState('')
const [auteur,setAuteur] = useState('') 
const [publication,setPublication] = useState(0)
const [resume,setResume]= useState('')
const [genre,setGenre] = useState('') 

const dispatch = useDispatch() 
const navigate = useNavigate() 
const handleAjout=(e)=>{
    e.preventDefault()
    dispatch(ajouterLivre({image,titre,auteur,publication,resume,genre}, navigate))
}


    return(

        <Form style={{margin:"40px", padding:"50px", backgroundColor:"#FFF3F5", borderRadius:"8%"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"30px", fontFamily:"cursive", color:"#DE5D83"}}>Image de couverture </Form.Label>
        <Form.Control onChange={(e)=>setImage(e.target.files[0])} type="file" placeholder="Ecrire titre" />
      </Form.Group>

       
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"30px", fontFamily:"cursive", color:"#DE5D83"}}>Titre</Form.Label>
        <Form.Control onChange={(e)=>setTitre(e.target.value)} type="text" placeholder="Ecrire le titre" />
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"30px", fontFamily:"cursive", color:"#DE5D83"}}>Auteur</Form.Label>
        <Form.Control onChange={(e)=>setAuteur(e.target.value)} type="text" placeholder="Ajouter l'auteur" />
         </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"30px", fontFamily:"cursive", color:"#DE5D83"}}>Publication</Form.Label>
        <Form.Control onChange={(e)=>setPublication(e.target.value)} type="Number" placeholder="Ajouter l'année de publication" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"30px", fontFamily:"cursive", color:"#DE5D83"}}>Résumé</Form.Label>
        <Form.Control onChange={(e)=>setResume(e.target.value)} type="text" placeholder="Ecrire le résumé" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"30px", fontFamily:"cursive", color:"#DE5D83"}}>Genre </Form.Label>
        <Form.Control onChange={(e)=>setGenre(e.target.value)} type="text" placeholder="Préciser le genre" />
      </Form.Group> 
        <Button onClick={(e)=>handleAjout(e)} style={{margin: "40px", fontSize:"20px", color: "#FC8EAC", backgroundColor:"pink"}}> 
            Soumettre 
        </Button>

    </Form>
    )
} 

export default AjouterLivre 