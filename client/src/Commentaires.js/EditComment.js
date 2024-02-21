import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { editcomment } from '../Redux/Actions/CommentAction';

const EditComment=({el,id})=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [commentaire,setCommentaire] = useState(el.commentaire)
    const dispatch = useDispatch()
    return (
        <div>
 <>
 <Button  onClick={handleShow} style={{color : "#ad1457", background:"#f48fb1" , margin : "20px", padding: "10px"}} >Modifier</Button>
  

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input value={commentaire} onChange={(e)=>setCommentaire(e.target.value)} type="text" placeholder={"modifier votre commentaire..."} style={{fontFamily:"cursive", width:"340px", height:"50px", margin:'130px'}}/>  

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer 
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(editcomment({comm : el._id,livre : id, up : {commentaire}}));handleClose()}}>
            Sauvegarder 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        </div>
    )
}


export default EditComment 