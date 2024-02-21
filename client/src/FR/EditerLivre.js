
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/esm/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editLivre, getOneLivre } from '../Redux/Actions/LivreAction';
  

const EditerLivre=()=>{

const {id} = useParams() 
const dispatch = useDispatch() 

useEffect(()=>{
    dispatch(getOneLivre(id))
},[])

const oneLivre = useSelector(state => state.LivreReducer.oneBook) 



const [Image, setImage] = useState(oneLivre.Image)
const [titre,setTitre]= useState(oneLivre.titre)
const [auteur,setAuteur] = useState(oneLivre.auteur) 
const [publication,setPublication] = useState(oneLivre.publication)
const [resume,setResume]= useState(oneLivre.resume)
const [genre,setGenre] = useState(oneLivre.genre) 

useEffect(()=>{
    setImage(oneLivre.Image)
    setTitre(oneLivre.titre)
    setAuteur(oneLivre.auteur)
    setPublication(oneLivre.publication)
    setResume(oneLivre.resume)
    setGenre(oneLivre.genre) 

},[oneLivre]) 

const navigate = useNavigate() 

const handleEdit=(e)=>{
    e.preventDefault()
    dispatch(editLivre(id,{Image,titre,auteur,publication,resume,genre},navigate))
}
 

    return(

        <Form style={{margin:"40px", padding:"50px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label  style={{fontSize:"30px", fontFamily:"cursive", color:"#DE5D83"}}>Image de couverture </Form.Label>
        <Form.Control  onChange={(e)=>setImage(e.target.files[0])} type="file"  placeholder="Choisir une photo de couverture" />
      </Form.Group>

       
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label  style={{fontSize:"30px", fontFamily:"cursive", color:"#DE5D83"}}>Titre</Form.Label>
        <Form.Control value={titre} onChange={(e)=>setTitre(e.target.value)} type="text" placeholder="Ecrire titre" />
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"30px", fontFamily:"cursive", color:"#DE5D83"}}>Auteur</Form.Label>
        <Form.Control value={auteur} onChange={(e)=>setAuteur(e.target.value)} type="text" placeholder="Ajouter auteur" />
         </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label  style={{fontSize:"30px", fontFamily:"cursive", color:"#DE5D83"}}>Publication</Form.Label>
        <Form.Control value={publication} onChange={(e)=>setPublication(e.target.value)} type="Number" placeholder="Ajouter année de publication" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label  style={{fontSize:"30px", fontFamily:"cursive", color:"#DE5D83"}}>Résumé</Form.Label>
        <Form.Control style={{padding:"20px"}} value={resume} onChange={(e)=>setResume(e.target.value)} type="text" placeholder="Ecrire résumé" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label  style={{fontSize:"30px", fontFamily:"cursive", color:"#DE5D83"}}>Genre </Form.Label>
        <Form.Control value={genre} onChange={(e)=>setGenre(e.target.value)} type="text" placeholder="Préciser le genre" />
      </Form.Group> 
        <Button onClick={(e)=>handleEdit(e)} style={{margin:"40px", fontSize:"20px", color: "#FC8EAC", backgroundColor:"pink"}}> 
            Soumettre 
        </Button>

    </Form>
    )
} 

export default EditerLivre 