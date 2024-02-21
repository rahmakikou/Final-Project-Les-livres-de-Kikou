//entry point of all reducers

import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import ErrorReducer from './ErrorReducer'
import LivreReducer from './LivreReducer'
import CommentReducer from './CommentReducer' 

const rootReducer = combineReducers({AuthReducer,ErrorReducer, LivreReducer, CommentReducer}) 


export default rootReducer 