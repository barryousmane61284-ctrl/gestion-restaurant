import commandeservice from "../service/commande.service.js";

class commandecontroller{
    static creationcommande = async(req,res)=>{
        try{
            res.status(201).json(await commandeservice.creationcommande(req.body))
        }
        catch(error){
            res.json(error)          
        }
    }
     static recuperationId = async(req,res)=>{
        try{
            res.status(200).json(await commandeservice.recuperationId(req.params.id))
        }
        catch(error){
            res.json(error)          
        }
    }
     static toutcommande = async(req,res)=>{
        try{
            res.status(200).json(await commandeservice.toutcommande())
        }
        catch(error){
            res.json(error)          
        }
    }
     static update = async(req,res)=>{
        try{
            res.status(200).json(await commandeservice.update(req.params.id,req.body))
        }
        catch(error){
            res.json(error)          
        }
    }
     static suppression = async(req,res)=>{
        try{
            res.status(200).json(await commandeservice.suppression(req.params.id))
        }
        catch(error){
            res.json(error)        
        }
    }

}
export default commandecontroller;
