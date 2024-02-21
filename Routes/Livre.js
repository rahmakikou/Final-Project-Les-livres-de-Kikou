
const express = require ('express')
const Livre = require('../Models/Livre')
const { AjoutLivre, AfficheLivres, SupprimerLivre, MettreAJour, ChercherUn } = require('../Controllers/Livre')

const livreRouter = express.Router() 

livreRouter.post('/ajoutLivre',AjoutLivre) 

livreRouter.get('/afficherLivres',AfficheLivres) 

livreRouter.delete('/supprimerLivre/:id', SupprimerLivre) 

livreRouter.put('/mettreAJour/:id', MettreAJour)

livreRouter.get ('/ChercherUnlivre/:id', ChercherUn) 


module.exports = livreRouter 