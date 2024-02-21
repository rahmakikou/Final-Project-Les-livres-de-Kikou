

const mongoose = require ('mongoose')

const CommentSchema = new mongoose.Schema(

    {
        commentaire : String,
        owner : {
            type : mongoose.Types.ObjectId,
            ref : 'autre'
        },
        livre : {
            type : mongoose.Types.ObjectId,
            ref : 'livre'
        }
    }
)

module.exports = mongoose.model('comment', CommentSchema) 