import axios from 'axios'
 import { Navigate } from 'react-router-dom'
import { CHERCHERCOMMENTS, GETONECOMMENT } from '../ActionTypes/CommentType'

export const cherchercomments=(id)=>async(dispatch)=>{
    try {
     const res = await axios.get(`/kikou/users/affichercomments/${id}`)
    
     dispatch(
    {
   type : CHERCHERCOMMENTS,
   payload :  res.data.Comments 
    }
     )
    
    } catch (error) {
        console.log(error)
    }
}

export const ajoutercomment=(newcomment)=>async(dispatch)=>{
    try {

        await axios.post('/kikou/users/ajoutcomment', newcomment,{
            headers : {
                
                Authorization : localStorage.getItem('token')
            }
        })
        dispatch(cherchercomments(newcomment.livre))

      

    } catch (error) {
        console.log(error) 
    }
    
}


export const getOnecomment=(id)=>async(dispatch)=>{
        try {
         const res =  await axios.get(`/kikou/users/ChercherUncomment/${id}`)

         dispatch(
            {
                type: GETONECOMMENT,
                payload: res.data.commentF
            }
         )

        } catch (error) {
            console.log(error)
        }
}

export const editcomment=(rahma)=>async(dispatch)=>{
    try {
     const res =  await axios.put(`/kikou/users/mettreAJour/${rahma.comm}`,rahma.up)
            dispatch(cherchercomments(rahma.livre))

          

    } catch (error) {
        console.log(error)
    }
}

export const deletecomment=(cord)=>async(dispatch)=>{
    try {
        await axios.delete(`/kikou/users/supprimerComment/${cord.comm}`)

        dispatch(cherchercomments(cord.livre))

    } catch (error) {
        console.log(error)
    }
}