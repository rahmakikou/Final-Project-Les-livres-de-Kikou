const User = require("../Models/User")

const bcrypt = require('bcrypt'); 

var jwt = require('jsonwebtoken');  

exports.SignUp=async(req,res)=>{

    try {
        const  { email, password} = req.body 
        const found = await User.findOne({email}) 

        if (found) {
            return res.status(400).send({errors : [{message : 'email already exists'}]})
        }

        const newUser = new User(req.body) 

        const saltRounds = 10; 
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt); 

            newUser.password = hashedPassword 

            await newUser.save() 
        
            const payload = {id : newUser._id}   

            var token = jwt.sign(payload, process.env.privateKey,{ expiresIn: '1h' }); //shhh = private key 

        res.status(200).send({message : "user registred", newUser,token})

    } catch (error) {
        return res.status(500).send({errors : [{message : 'could not add user'}]})
    }

}

exports.SignIn=async(req,res)=>{
    try {
        
        const {email, password} = req.body 
        const found = await User.findOne({email}) 

        if (!found) {
            return res.status(400).send({errors : [{message : "Email not found"}]})
        }

     const matched = bcrypt.compareSync(password, found.password)  

     if (!matched) {
        return res.status(400).send({errors: [{message : " Wrong password"}]})
     }

     const payload = {id : found._id}   

     var token = jwt.sign(payload, process.env.privateKey); //shhh = private key 

     res.status(200).send({message: 'Connected', found, token})

    } catch (error) { 
       return res.status(500).send({errors: [{message : "could not sign in"}]})
    }
}


exports.UpdateProfil=async(req,res)=>{
    try {
        const {id}= req.params
        await User.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send('{message : utlisateur mis à jour avec succès}')
    } catch (error) {
        return res.status(500).send({errors: [{message : "could not update user"}]})
    }
}

exports.SupprimerProfil=async(req,res)=>{
    try {
        const {id}= req.params 
        await User.findByIdAndDelete(id) 
        res.status(200).send('{message : utlisateur supprimé}')
    } catch (error) {
        return res.status(500).send({errors: [{message : "could not delete user"}]})
    }
}


exports.ALLUsers=async(req,res)=>{
    try {
        const users = await User.find()
        res.status(200).send({message : 'profils affichés avec succès',users})
    } catch (error) {
        return res.status(500).send({errors: [{message : "impossible d'afficher les profils"}]})
    }
}

exports.OneUser=async(req,res)=>{
    try {
        const {id}=req.params 
        const userF = await User.findById(id)  

        res.status(200).send({message : 'profil affiché avec succès',userF})
    } catch (error) {
        return res.status(500).send({errors: [{message : "impossible d'afficher le profil"}]})
    }
}