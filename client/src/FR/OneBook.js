import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOneLivre } from "../Redux/Actions/LivreAction"
import { Link, useNavigate, useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListeComments from "../Commentaires.js/ListeCommentaires";
import { ajoutercomment } from "../Redux/Actions/CommentAction";

 



const OneBook=()=>{

    const {id}= useParams() 
    const dispatch= useDispatch() 

    useEffect(()=>{
        dispatch(getOneLivre(id)) 
      },[])
      const [commentaire, setCommentaire] = useState('')

const [LirePlus,setLirePlus]= useState(false) 

      const oneBook = useSelector(state=>state.LivreReducer.oneBook) 
    
      const navigate = useNavigate()  

    return(
      <div className="onebook"> 
        <Card style={{ width: '15rem', margin:"20px", margin:"70px"}}>
        <Card.Img src={oneBook.Image} style={{width:"237px",height:"200px"}}/> 
        <Card.Body className="zina">
        <Link to={`/OneBook/${oneBook._id}`}>  <Card.Title style={{color:"#8D4585", fontSize:"40px"}}>{oneBook.titre}</Card.Title></Link>  
        <br/> 
          <Card.Text style={{color:"#7852A9", fontSize:"30px"}}>{oneBook.auteur}</Card.Text>
        </Card.Body>
        <ListGroup className="details">
          <ListGroup.Item style={{color:"#9932CC", fontSize:"25px"}}>{oneBook.publication}</ListGroup.Item>
          <ListGroup.Item style={{color:"#4B0082", fontSize:"25px"}}> { LirePlus ? oneBook.resume : oneBook?.resume?.substring(0,200)} </ListGroup.Item>
            <button className="btn" onClick={() => setLirePlus(!LirePlus)}> 
            {LirePlus? "Lire Moins" : "Lire Plus" } 
              </button>
          <ListGroup.Item style={{color:"#800080", fontSize:"25px"}}>{oneBook.genre}</ListGroup.Item>
        </ListGroup>
      </Card> 
       <div style={{display:'flex',flexDirection : 'column',alignItems:'center'}}>
        <div>
       <input value={commentaire} onChange={(e)=>setCommentaire(e.target.value)} type="text" placeholder={"ajouter un commentaire..."} style={{fontFamily:"cursive", width:"340px", height:"50px", marginLeft:'130px',marginRight:'130px'}}/>  
      <button onClick={()=>{dispatch(ajoutercomment({commentaire,livre : id}));setCommentaire('')}} style={{margin: "10px", padding: "10px", color: "#E72660", fontSize : "large", fontFamily: "fantasy", background:"#FFF3F5"}}>ajouter</button>
      </div>
      <ListeComments id={id}/>
      </div>
      
</div>
 

 
    )
}

export default OneBook 