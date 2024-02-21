import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deletecomment, getOnecomment } from '../Redux/Actions/CommentAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import EditComment from './EditComment';
import { current } from '../Redux/Actions/AuthAction';


const OneCommentaire=({el})=>{
  const {id}= useParams() 
  const dispatch= useDispatch() 

  useEffect(()=>{
      dispatch(getOnecomment(id))
      dispatch(current())
    },[])

    const oneComment = useSelector(state=>state.CommentReducer.oneComment) 
    const user = useSelector(state => state.AuthReducer.user)
    
    return(
        <Card className="lista"> 
        <Card.Header style={{fontSize: "25px", color: "#4a148c", fontFamily:"monospace"}}>{el?.owner?.name}</Card.Header>
        <Card.Body>
          <Card.Title style={{fontSize: "20px", color: "#4a148c", fontFamily:"revert", margin:"20px"}}>{el.commentaire}</Card.Title>
          {
            (user._id == el?.owner?._id  || user.role == 'admin') &&
           
            <Button style={{ color: "#d500f9", background:"#f3e5f5", margin : "20px", padding: "10px"}} onClick={()=>dispatch(deletecomment({comm : el._id, livre : id}))}>Effacer</Button>
           
          }
          {
            user._id == el?.owner?._id &&
          //? = pour passer au next step si l'étape précédente est effectuée 
            <EditComment el={el} id={id}/>
    
          }
         
    
        </Card.Body>
      </Card>
    ) 
}

export default OneCommentaire 