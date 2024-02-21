import { CHERCHERLIVRES, GETONELIVRE, HANDLECHANGEMENT, RESETFILTER } from "../ActionTypes/LivreType"

const initialState = {
    livres : [],
    oneBook: {},
    changement : "", 
}

const LivreReducer=(state=initialState, action)=>{
    switch (action.type) {
        case CHERCHERLIVRES: return {...state, livres : action.payload}
        case GETONELIVRE : return {...state, oneBook : action.payload}


        case HANDLECHANGEMENT : return  {...state, changement : action.payload} 
        case RESETFILTER : return { ...state, changement :""} 

        
        default: return state 
           
    }
}

export default LivreReducer 