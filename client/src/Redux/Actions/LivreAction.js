
import axios from 'axios'
import { CHERCHERLIVRES, GETONELIVRE, HANDLECHANGEMENT, RESETFILTER } from '../ActionTypes/LivreType'
 


 
export const handleChangement=(payload)=>{
    return(
        {
            type : HANDLECHANGEMENT,
            payload 
        }
    )
}



export const resetFilter=()=>{
    return(
        {
            type: RESETFILTER
        }
    )
} 


export const chercherLivres=()=>async(dispatch)=>{
    try {
     const res = await axios.get('/kikou/livres/afficherLivres')
    
     dispatch(
    {
   type : CHERCHERLIVRES,
   payload :  res.data.livres 
    }
     )
    
    } catch (error) {
        console.log(error)
    }
}

export const ajouterLivre=(newLivre, navigate)=>async(dispatch)=>{
    try {
        const formImg = new FormData()
        formImg.append('image',newLivre.image)
        const res = await axios.post('https://api.imgbb.com/1/upload?expiration=600&key=3ccab09364136cf43fb68d497697ac5f', formImg)

        await axios.post('/kikou/livres/ajoutLivre', {...newLivre, Image : res.data.data.url})
        dispatch(chercherLivres())

        navigate ('/afficherLivres')

    } catch (error) {
        console.log(error) 
    }
    
}


export const getOneLivre=(id)=>async(dispatch)=>{
        try {
         const res =  await axios.get(`/kikou/livres/ChercherUnlivre/${id}`)

         dispatch(
            {
                type: GETONELIVRE,
                payload: res.data.livreF
            }
         )

        } catch (error) {
            console.log(error)
        }
}

export const editLivre=(id,upLivre,navigate)=>async(dispatch)=>{
    const formImg = new FormData()
    formImg.append('image',upLivre.Image)
    const resImg = await axios.post('https://api.imgbb.com/1/upload?expiration=600&key=3ccab09364136cf43fb68d497697ac5f', formImg)

    try {
     const res =  await axios.put(`/kikou/livres/mettreAJour/${id}`,{...upLivre,Image : resImg.data.data.url})
            dispatch(chercherLivres())

            navigate ('/afficherLivres')

    } catch (error) {
        console.log(error)
    }
}

export const deleteLivre=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/kikou/livres/supprimerLivre/${id}`)

        dispatch(chercherLivres())

    } catch (error) {
        console.log(error)
    }
}