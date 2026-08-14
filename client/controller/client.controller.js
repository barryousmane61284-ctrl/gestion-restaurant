import clientservice from "../service/client.service.js";

class clientcontroller{
    // creation
    static creationclient = async(req,res)=>{
        try{
            res.status(201).json(await clientservice.creationclient(req.body))
        }
        catch (error){
            res.json(error)

        }
    }
    // reuperation
    static toutclient = async(req,res)=>{
        try{
            res.status(200).json(await clientservice.toutclient())
        }
        catch(error){
            res.json(error)
        }
    }
    // recuperationID
    static recuperationId = async(req,res)=>{
        try{
            res.status(200).json(await clientservice.recuperationId(req.params.id))
        }
        catch(error){
            res.json(error)
        }
    }
    // mise a jour
    static update = async(req,res)=>{
        try{
            res.status(200).json(await clientservice.update(req.params.id,req.body))
        }
        catch(error){
            res.json(error)
        }
    }
    // suppression
    static suppression = async(req,res)=>{
        try{
            res.status(200).json(await clientservice.suppression(req.params.id))
        }
        catch(error){
            res.json(error)         
        }
        
    }
    
}
export default clientcontroller;