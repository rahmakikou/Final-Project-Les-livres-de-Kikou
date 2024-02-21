 
import './App.css';
import NavAuth from './Components/NavAuth';
 import Profil from './Components/Profil'
import Register from './Components/Register';
import Home from './Components/Home'; 
import Login from './Components/Login';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import ErrorAuth from './Components/ErrorAuth';
import ListeLivres from './FR/ListeLivres';
import AjouterLivre from './FR/AjouterLivre';
import EditerLivre from './FR/EditerLivre';
import EditProfil from './Components/EditProfil';
import AllProfils from './Components/AllProfils';
import OneUser from './Components/OneUser';
import OneBook from './FR/OneBook';
import EditComment from './Commentaires.js/EditComment'; 

import AudioPlayer from 'react-h5-audio-player'; 

import axios  from 'axios';

import 'react-h5-audio-player/lib/styles.css'; 
import { useState, useEffect } from 'react';
 
function App() {
 

const playlist= [ {
    src: 'Nocturne.mp3' }, 
   { src: 'Schindler.mp3' } 
   ] 
   
   const [currentTrack, setTrackIndex] = useState(0) 
   
   const handleClickNext = () => { 
   console.log('click next') 
   setTrackIndex((currentTrack) => 
   currentTrack < playlist.length - 1 ? currentTrack + 1 : 0 
   );
    };
   
   const handleEnd = () => { 
   console.log('end') 
   setTrackIndex((currentTrack) => 
   currentTrack < playlist.length - 1 ? currentTrack 
   + 1 : 0 
   ); 
    } 



  return (
     <div>
      <NavAuth/> 
    <ErrorAuth/> 
 
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/Register' element ={<Register/>} /> 
        <Route path='/Profil' element ={<PrivateRoute><Profil/></PrivateRoute>}/>
       
        <Route path='/Login' element ={<Login/>}/>
        
        <Route path='/ajoutLivre' element ={<AjouterLivre/>}/> 
        <Route path='/mettreAJour/:id' element ={<EditerLivre/>}/> 
        <Route path='/updateProfil' element={<EditProfil/>}/>
        <Route path='/TousLesProfils' element={<AllProfils/>}/>
        <Route path='/OneUser/:id' element={<OneUser/>}/>
        <Route path='/OneBook/:id' element={<OneBook/>}/>
        <Route path='/mettreAJour/:id' element={<EditComment/>}/>
        
        <Route path='/afficherLivres' element ={<ListeLivres/>}/> 
        <Route path='/RomanModerne' element={<ListeLivres/>}/>
        <Route path='/RomanHistorique' element={<ListeLivres/>}/>
        <Route path='/RomanFantastique' element={<ListeLivres/>}/>
        
        <Route path='/RomanAutobiographique' element={<ListeLivres/>}/>
        <Route path='/RomanEpistolaire' element={<ListeLivres/>}/>
        <Route path='/RomanceHistorique' element={<ListeLivres/>}/>
      </Routes>

      
      <AudioPlayer className='audio' 
volume="0.5" 
src={playlist[currentTrack].src} 
showSkipControls 
onClickNext={handleClickNext} 
onEnded={handleEnd} 
 
 /> 

     </div>
  );
}

export default App;
