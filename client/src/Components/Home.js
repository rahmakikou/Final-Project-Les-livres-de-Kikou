 
 
import { Link } from "react-router-dom"

 
const Home=()=>{

  
    return(

       
        <div className="accueil"> 

<div className="home">
<Link to={"/RomanModerne"} style={{ color: "#936C91",textDecoration: "none"}}><h3> Roman Moderne</h3></Link>

          </div>
        
        <div className="home">
    <Link to={"/RomanFantastique"} style={{ color: "#936C91",textDecoration: "none"}}> <h3> Roman Fantastique</h3></Link>   
      
            </div> 

 

     <div className="home"> 
     <Link to={"/RomanHistorique"} style={{ color: "#936C91",textDecoration: "none"}}> <h3> Roman Historique</h3></Link>   
         
            </div> 

            <div className="home"> 
     <Link to={"/RomanAutobiographique"} style={{ color: "#936C91",textDecoration: "none"}}> <h3> Roman Autobiographique</h3></Link>   
        
            </div> 


            <div className="home"> 
     <Link to={"/RomanEpistolaire"} style={{ color: "#936C91",textDecoration: "none"}}> <h3>Roman Epistolaire</h3></Link>   
         
            </div> 

            <div className="home"> 

     <Link to={"/RomanceHistorique"} style={{ color: "#936C91", textDecoration: "none"}}> <h3> Romance Historique</h3> </Link>   
         
            </div> 

             </div>
    )
}

export default Home 