
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import { chercherProfils } from "../Redux/Actions/AuthAction"
import Profil from "../Components/Profil" 
import OneProfil from "./OneProfil"

const AllProfils=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(chercherProfils()) 
    },[])

    const profils = useSelector(state=>state.AuthReducer.profils)
    return(
        <div className="lista">
             
                    
            { 
            profils.map((el,i,t)=> <OneProfil el={el}/>)
            }
            
        </div>
    )
}

export default AllProfils 