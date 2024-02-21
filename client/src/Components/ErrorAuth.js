import { useSelector } from "react-redux"
import Alert from 'react-bootstrap/Alert';



const ErrorAuth=()=>{

    const ErrorStore = useSelector(state => state.ErrorReducer)

    return(
        <div>
            {
                ErrorStore.map((el,i,t)=>  
                <Alert key="danger" variant='danger'>
               {el.msg}
              </Alert>) 
            }
        </div>
    )
}


export default ErrorAuth 