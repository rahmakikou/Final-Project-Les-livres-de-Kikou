
const express = require ('express')

const bcrypt = require('bcrypt'); 

var jwt = require('jsonwebtoken'); 
const { SignUp, SignIn, UpdateProfil, SupprimerProfil, ALLUsers, OneUser } = require('../Controllers/User');
const { validationRegistrer, Validation, validationLogin } = require('../Middleweares/Validation');
const { isAuth } = require('../Middleweares/isAuth');

const userRouter = express.Router()


userRouter.post('/SignUp', validationRegistrer, Validation, SignUp),


userRouter.post('/SignIn', validationLogin, Validation, SignIn)

userRouter.get('/ConnectedUser', isAuth,(req,res)=>{res.send(req.user)})

userRouter.put('/UpdateProfil/:id',UpdateProfil)

userRouter.delete('/supprimerProfil/:id',SupprimerProfil)

userRouter.get('/TousLesProfils', ALLUsers)

userRouter.get('/oneUser/:id',OneUser) 

module.exports = userRouter 