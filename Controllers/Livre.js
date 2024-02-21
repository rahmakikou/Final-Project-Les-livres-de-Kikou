const Livre = require("../Models/Livre")


exports.AjoutLivre=async(req,res)=>{
    try {
        console.log(req.body)
        const newLivre = new Livre(req.body) 

        await newLivre.save() 

        res.status(200).send({Message : 'Livre ajouté avec succès', newLivre})
    } catch (error) {
        res.status(500).send('Livre non ajouté')
    }
}

exports.AfficheLivres=async(req,res)=>{

    try {
        
      const livres =  await Livre.find() 
        res.status(200).send({Message : "Liste de livres affichée avec succès", livres})
    } catch (error) {
        res.status(500).send("Impossible d'afficher les livres")
    }
}

exports.SupprimerLivre=async(req,res)=>{

    try {
        const {id} = req.params

      await Livre.findByIdAndDelete(id) 
      res.status(200).send("Livre supprimé de la liste") 
    } catch (error) {
        res.status(500).send("Impossible de supprimer ce livre")

    }
}

exports.MettreAJour=async(req,res)=>{
    try {
        
        const {id} = req.params
        console.log(id)
        await Livre.findByIdAndUpdate(id, {$set : req.body})  

        res.status(200).send("Livre mis à jour avec succès") 

    } catch (error) {

         res.status(500).send("Impossible de mettre à jour ce livre")
    }
}

exports.ChercherUn= async(req,res)=>{
    try {
         const {id} = req.params 

       const livreF=  await Livre.findById(id)

        res.status(200).send({Message : "Livre obtenu avec succès", livreF}) 
    } catch (error) {
       
        res.status(500).send("Impossible de chercher le livre demandé") 
    }
}