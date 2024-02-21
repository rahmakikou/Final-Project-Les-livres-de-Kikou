const User = require("../Models/User");
var jwt = require('jsonwebtoken');  



exports.isAuth=async(req,res,next)=>{
    try {
        const token = req.header('Authorization') 

        var decoded = jwt.verify(token, process.env.privateKey); 

        if (!decoded) {
            return res.status(400).send({errors: [{message : "invalid token"}]})
        }

      const findUser = await User.findById(decoded.id) 

      req.user  = findUser

    next() 


    } catch (error) {
        res.status(500).send({errors :[{message : "Not auth"}]})
    }
}