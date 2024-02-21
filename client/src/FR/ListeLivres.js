import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import { chercherLivres } from "../Redux/Actions/LivreAction"
import CarteLivre from "./CarteLivre"
import { useLocation } from "react-router-dom"
import FilterLivre from "./FilterLivre"

const ListeLivres=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(chercherLivres()) 
    },[])

    const livres = useSelector(state=>state.LivreReducer.livres)

    const location = useLocation()

const genre1 = "roman moderne"
const genre2 = "roman fantastique"
const genre3 = "roman historique"

const genre4 = "roman autobiographique"
const genre5 = "romance historique"
const genre6 = "roman épistolaire"

const changement = useSelector(state=>state.LivreReducer.changement)

const Resultat=(a) => livres.filter((el,i,t)=> el.genre == a && el.titre.toUpperCase().includes(changement.toUpperCase()))

    return(
        <div className="lista" style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
              
             <FilterLivre />
             
            <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
            { 
            location.pathname === '/afficherLivres' ?
            <>
            {
                livres.filter((el,i,t)=> el.titre.toUpperCase().includes(changement.toUpperCase())).map((el,i,t)=> <CarteLivre el={el}/>)
            }
            </>

            :
            location.pathname === '/RomanModerne' ?

            <>
            {
                  Resultat(genre1).length == 0 ? <h1>Pas de livre</h1> : Resultat(genre1).map((el,i,t)=> <CarteLivre el={el}/>)
            }
            </>

            :
            location.pathname === '/RomanFantastique' ?

            <>
             {
                    Resultat(genre2).map((el,i,t)=> <CarteLivre el={el}/>)
                    }
            
            </>
            :
            location.pathname === '/RomanHistorique' ?
            <>
              {
                Resultat(genre3).map((el,i,t)=> <CarteLivre el={el}/>)
                }
                </>

        :

         location.pathname === '/RomanAutobiographique' ?

    <>
    {
      Resultat(genre4).map((el,i,t)=> <CarteLivre el={el}/>)
    }
    </>

    :
        location.pathname === '/RomanceHistorique' ?

                 <>
           {
        Resultat(genre5).map((el,i,t)=> <CarteLivre el={el}/>)
             }
            </>
            :
            <>
            {
           Resultat(genre6).map((el,i,t)=> <CarteLivre el={el}/>)
           }
           </>
        }
            </div>
      </div> 
    )      
}


export default ListeLivres 