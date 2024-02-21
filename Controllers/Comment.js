
const Comment = require ('../Models/Comment') 

exports.AjoutComment=async(req,res)=>{
    try {
        console.log(req.body)
        const newComment = new Comment({...req.body,owner : req.user._id}) 

        await newComment.save() 

        res.status(200).send({Message : 'Comment ajouté avec succès', newComment})
    } catch (error) {
        res.status(500).send('Comment non ajouté')
    }
}

exports.AfficheComments=async(req,res)=>{

    try {
        const {id} = req.params
      const Comments =  await Comment.find({livre : id}).populate('owner').populate("livre")
        res.status(200).send({Message : "Liste de Comments affichée avec succès", Comments})
    } catch (error) {
        res.status(500).send("Impossible d'afficher les Comments")
    }
}

exports.SupprimerComment=async(req,res)=>{

    try {
        const {id} = req.params

      await Comment.findByIdAndDelete(id) 
      res.status(200).send("Comment supprimé de la liste") 
    } catch (error) {
        res.status(500).send("Impossible de supprimer ce Comment")

    }
}

exports.MettreAJour=async(req,res)=>{
    try {
        
        const {id} = req.params
        console.log(id)
        await Comment.findByIdAndUpdate(id, {$set : req.body})  

        res.status(200).send("Comment mis à jour avec succès") 

    } catch (error) {

         res.status(500).send("Impossible de mettre à jour ce Comment")
    }
}

exports.ChercherUn= async(req,res)=>{
    try {
         const {id} = req.params 

       const CommentF=  await Comment.findById(id)

        res.status(200).send({Message : "Comment obtenu avec succès", CommentF}) 
    } catch (error) {
       
        res.status(500).send("Impossible de chercher le Comment demandé") 
    }
}