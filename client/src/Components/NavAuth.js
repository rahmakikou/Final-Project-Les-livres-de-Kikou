import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../Redux/Actions/AuthAction';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import EditProfil from './EditProfil';
 
const NavAuth=()=>{

  const token = localStorage.getItem('token')
  const user = useSelector(state => state.AuthReducer.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
    return(

      
        <Navbar className='nav'>
        <Container>
        
          <div style={{display: "flex"}}> 
          <img src="https://cdn.discordapp.com/attachments/1160943740790255687/1209777905261875271/Livres_de_Kikou.png?ex=65e82879&is=65d5b379&hm=1f5cb193d2d221c107628e46739f532c557ea7da281548867925b32dd19d59cf&" alt="Logo du site"/>
          <Nav.Link style={{color:"black", margin: "10px", textDecoration:"none", fontSize:"25px"}}>Les Livres de Kikou</Nav.Link>
    
</div>
        
       
         
          <Nav>
            <Nav.Link className='One' as={Link} to='/'>Accueil</Nav.Link>

            {
              token && user ?

              <>
                  <NavDropdown className='One' title="Découvrir" id="basic-nav-dropdown">
                 <NavDropdown.Item> <Link to="/afficherLivres">Liste Livres</Link></NavDropdown.Item>
              <NavDropdown.Item className='One' href="#action/3.2">
              {user.role == "admin" && <Link to="/ajoutLivre">Ajouter Livre</Link> }
              </NavDropdown.Item>
            </NavDropdown> 

            { user.role == 'admin' && <Nav.Link className='One' as={Link} to='/TousLesProfils'>Liste Utilisateurs</Nav.Link>}

            <NavDropdown className='One' title="Profil" id="basic-nav-dropdown">
                 <NavDropdown.Item className='One'>
                 <Link to="/Profil">
                  Afficher Profil
                  </Link> </NavDropdown.Item>
              <NavDropdown.Item className='One'> 
              <Link to="/updateProfil">Modifier le Profil</Link> 
              </NavDropdown.Item> 
            </NavDropdown> 
               

                <Nav.Link className='One' onClick={()=>{dispatch(logout());navigate('/')}} >Se déconnecter</Nav.Link>
                <Nav.Link >{user.name}</Nav.Link>
             
              </>

              :

              <>
              <Nav.Link className='One' as={Link} to='/Register'>S'inscrire</Nav.Link>
              <Nav.Link className='One' as={Link} to='/Login'>S'enregistrer</Nav.Link>
              </>
            }



            
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavAuth