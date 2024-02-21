
const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema(

    {
        image : String, 
        name : String, 
        email : {type : String, required: true, unique : true}, 
        password : {type : String, required: true},
        age : Number, 
        role : {type : String, default :'user'}
    

    }
)

module.exports = mongoose.model('autre', userSchema) 