const { body, validationResult } = require ('express-validator')



exports.validationRegistrer = [
    body('password', "Your password must contain min 8 char").isLength({min : 8}),
    body ('email', 'Your email Wrong email').isEmail()
]

exports.validationLogin= [
    body('password', "password incorrect").isLength({min : 8}),
    body ('email', 'Wrong mail').isEmail() 
]

exports.Validation=(req,res,next)=>{
const errors= validationResult(req) 

    if (!errors.isEmpty()){
        return res.status(400).send(errors) 
    }
    next()
}