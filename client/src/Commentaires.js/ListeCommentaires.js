
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import { cherchercomments } from "../Redux/Actions/CommentAction"
import OneCommentaire from "./OneCommentaire"
 

const ListeComments=({id})=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(cherchercomments(id)) 
    },[])

    const commentaires = useSelector(state=>state.CommentReducer.commentaires)
    return(
        <div style={{paddingBottom:"100px"}}>
             
                    
            { 
            commentaires.map((el,i,t)=> <OneCommentaire el={el}/>)
            }
            
        </div>
    )
}

export default ListeComments 