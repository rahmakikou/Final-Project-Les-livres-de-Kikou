
import { CLEARERROR, HANDLEERROR } from "../ActionTypes/ErrorTypes"

export const handleError=(msg)=>(dispatch)=>{
    const id = Math.random()

    dispatch(
        {
            type : HANDLEERROR,
            payload : {id,msg}
        }
    )

    setTimeout(() => {
        dispatch({
            type : CLEARERROR,
            payload : id
        })
    }, 3000);
}