import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteLivre } from '../Redux/Actions/LivreAction';
import { useState } from 'react';

const CarteLivre=({el})=>{

const dispatch = useDispatch()


const user = useSelector(state => state.AuthReducer.user)

    return(
      
        <Card style={{ width: '15rem', margin:"20px" }}>
        <Card.Img src={el.Image} style={{width:"237px",height:"200px"}}/> 
        <Card.Body className="zina">
        <Link to={`/OneBook/${el._id}`}>  <Card.Title style={{color:"#8D4585", fontSize:"40px"}}>{el.titre}</Card.Title></Link>  
        <br/> 
          <Card.Text style={{color:"#7852A9", fontSize:"30px"}}>{el.auteur}</Card.Text>
        </Card.Body>
        <ListGroup className="details">
          <ListGroup.Item style={{color:"#9932CC", fontSize:"25px"}}>{el.publication}</ListGroup.Item>
          <ListGroup.Item style={{color:"#800080", fontSize:"25px"}}>{el.genre}</ListGroup.Item>
          
          <div className='fless'>
            { user.role == 'admin' &&
            <>
          <Button as={Link} to={`/mettreAJour/${el._id}`}>Editer</Button>

          <Button variant='danger' onClick={()=>dispatch(deleteLivre(el._id))}>Supprimer</Button>
          </>
            } 
          </div>
           
        </ListGroup>
        
      </Card> 
    )
}

export default CarteLivre 
