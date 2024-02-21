
 import { useDispatch, useSelector } from 'react-redux';
import { handleChangement, resetFilter } from '../Redux/Actions/LivreAction';
import { useState } from 'react';
 

const FilterLivre =()=>{
 
    const changement= useSelector(state=>state.changement)
    const [chang,setChang] = useState(changement)
    const dispatch = useDispatch()

    return( 
        <div>

                <input style={{width:"350px", height:"45px"}} value={chang} onChange={(e)=>{setChang(e.target.value);dispatch(handleChangement(e.target.value))}}/>   
                <button  style={{margin:"40px", fontSize:"25px", color: "#FC8EAC", backgroundColor:"pink"}} onClick={()=>{dispatch(resetFilter());setChang('')}}> Réinitialiser </button> 
        </div>
    )
}

export default FilterLivre 
