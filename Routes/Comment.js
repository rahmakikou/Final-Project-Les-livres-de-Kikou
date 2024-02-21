


const express = require ('express')

const Comment = require('../Models/Comment') 

const { AjoutComment, AfficheComments, SupprimerComment, MettreAJour, ChercherUn } = require('../Controllers/Comment')
const { isAuth } = require('../Middleweares/isAuth')
 
const CommentRouter = express.Router() 

CommentRouter.post('/ajoutComment',isAuth,AjoutComment) 

CommentRouter.get('/afficherComments/:id',AfficheComments) 

CommentRouter.delete('/supprimerComment/:id', SupprimerComment) 

CommentRouter.put('/mettreAJour/:id', MettreAJour)

CommentRouter.get ('/ChercherUnComment/:id', ChercherUn) 


module.exports = CommentRouter 