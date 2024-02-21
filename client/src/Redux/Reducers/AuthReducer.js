import { FAIL, REGISTER,LOGIN, LOGOUT, CURRENT, GETALLPROFILS, GETONEPROFIL } from "../ActionTypes/AuthType"
 

const initialState= {
    user: {},
    errors: [],
    profils : [],
    oneUser: {},
   
}

const AuthReducer=(state=initialState,action)=>{
    switch (action.type) {
        
        case GETALLPROFILS: return {...state, profils : action.payload}
        case GETONEPROFIL: return {...state, oneUser : action.payload}
        

        case FAIL : return {...state, errors : action.payload, user : null} 

        case REGISTER: 
        localStorage.setItem('token',action.payload.token) 
        return {...state,user : action.payload.newUser, errors : null} 

        case LOGIN : 
        localStorage.setItem('token', action.payload.token)
        return {...state, user : action.payload.found}

        case LOGOUT : 
        localStorage.removeItem('token')
        return {...state, user : null, errors : null}

        case CURRENT : return {...state, user : action.payload,errors : null}


        default: return state 
           
    }
}

export default AuthReducer 