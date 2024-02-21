import { CHERCHERCOMMENTS, GETONECOMMENT } from "../ActionTypes/CommentType"

const initialState = {
    commentaires : [],
    oneComment: {} 
}


const CommentReducer=(state=initialState, action)=>{
    switch (action.type) {
        case CHERCHERCOMMENTS: return {...state, commentaires : action.payload}
        case GETONECOMMENT : return {...state, oneComment : action.payload}
        
        default: return state 
           
    }
}

export default CommentReducer 