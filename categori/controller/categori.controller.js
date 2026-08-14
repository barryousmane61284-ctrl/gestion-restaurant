import categoriservice from "../service/categori.service.js"

class categoricontroller{
    static creationcategori = async(req,res)=>{
        try{
            res.status(201).json(await categoriservice.creationcategori(req.body))
        }
        catch (error){
            res.json(error)

        }
    }
    static recuperationId = async(req,res)=>{
        try{
            res.status(200).json(await categoriservice.recuperationId(req.params.id))
        }
        catch(error){
            res.json(error)
        }
    }
    static toutcategori = async(req,res)=>{
        try{
            res.status(200).json(await categoriservice.toutcategori())
        }
        catch(error){
            res.json(error)
        }
    }
    static update = async(req,res)=>{
        try{
            res.status(200).json(await categoriservice.update(req.params.id,req.body))
        }
        catch(error){
            res.json(error)
        }
    }
    static suppression = async(req,res)=>{
        try{
            res.status(200).json(await categoriservice.suppression(req.params.id))
        }
        catch(error){
            res.json(error)         
        }
        
    }
}
export default categoricontroller;