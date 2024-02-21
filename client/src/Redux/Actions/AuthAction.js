import { CURRENT, FAIL, GETALLPROFILS, GETONEPROFIL, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthType"; 
import axios from 'axios' 
import { handleError } from "./ErrorAction";




export const register=(newUser,navigate)=>async(dispatch)=>{
    try {
      const res =  await axios.post('/api/auth/SignUp',newUser) 
      
      const formImg = new FormData()
      formImg.append('image',newUser.image)
      const resR = await axios.post('https://api.imgbb.com/1/upload?expiration=600&key=3ccab09364136cf43fb68d497697ac5f', formImg)
 

      dispatch(
        {
            type : REGISTER, 
            payload: res.data //ce qui est retourné dans la réponse 
        }
      )
        navigate('/Profil') 
    } catch (error) {
 
        dispatch(
            {
                type: FAIL,
                payload: error.response.data.errors 
            }
        )
    }
}


export const login=(cordUser, navigate)=>async(dispatch)=>{
 
    try {
       const res = await axios.post('/api/auth/SignIn',cordUser)

        dispatch(
            {
                type: LOGIN,
                payload: res.data
            }
        )
            navigate ('/Profil')
    } catch (error) {
        dispatch(
            {
                type : FAIL, 
                payload : error.response.data.errors 
            }
        )
    }
}

export const logout=()=>{
    return(
        {
            type : LOGOUT
        }
    )
}

 
export const current=()=>async(dispatch)=>{

    const config = {
        headers : {
            
            Authorization : localStorage.getItem('token')
        }
    }
    try {
        const res =  await axios.get('/api/auth/ConnectedUser',config)

        dispatch(
            {
                type : CURRENT,
                payload : res.data
            }
        )
    } catch (error) {
         
           error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
           })
        } 
} 

export const chercherProfils=()=>async(dispatch)=>{
    try {
     const res = await axios.get('/api/auth/TousLesProfils')
    
     dispatch(
    {
   type : GETALLPROFILS,
   payload :  res.data.users
    }
     )
    
    } catch (error) {
        console.log(error)
    }
}


export const deleteProfil=(id,navigate)=>async(dispatch)=>{
    try {
        dispatch(logout())
        navigate('/') 
        await axios.delete(`/api/auth/supprimerProfil/${id}`)
    } catch (error) {
 
        dispatch(
            {
                type: FAIL,
                payload: error.response.data.errors 
            }
        )
    }
}

export const deleteOneUser=(id,navigate)=>async(dispatch)=>{
    try {
    
        await axios.delete(`/api/auth/supprimerProfil/${id}`)

        dispatch(chercherProfils())
        
        navigate('/TousLesProfils')
    } catch (error) {
 
        dispatch(
            {
                type: FAIL,
                payload: error.response.data.errors 
            }
        )
    }
}


export const getOneProfil=(id)=>async(dispatch)=>{
    try {
     const res =  await axios.get(`/api/auth/oneUser/${id}`)

     dispatch(
        {
            type:  GETONEPROFIL, 
            payload: res.data.userF
        }
     )

    } catch (error) {
        console.log(error)
    }
}


export const editProfil=(id,upProfil,navigate)=>async(dispatch)=>{
    try {

        const formImg = new FormData()
        formImg.append('image',upProfil.image)
        const resI = await axios.post('https://api.imgbb.com/1/upload?expiration=600&key=3ccab09364136cf43fb68d497697ac5f', formImg)

        const res =  await axios.put(`/api/auth/UpdateProfil/${id}`,{...upProfil,image : resI.data.data.url})
           
        dispatch( (current()))

            navigate ('/Profil')

    } catch (error) {
        console.log(error)
    }
}

