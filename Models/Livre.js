
const mongoose = require ('mongoose')

const livreSchema = new mongoose.Schema(

    {
        Image : String, 
        titre : String, 
        auteur: String, 
        publication : Number, 
        resume : String, 
        genre : String
    }
)

module.exports = mongoose.model('livre', livreSchema) 