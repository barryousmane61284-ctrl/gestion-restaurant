import commanderepository from "../repository/commande.repository.js";

class commandeservice{
    static creationcommande = async(data)=>{
        return await commanderepository.creationcommande(data)
    }
    static recuperationId = async(id)=>{
        return await commanderepository.recuperationId(id)
    }
    static toutcommande = async()=>{
        return await commanderepository.toutcommande()
    }
    static update = async(id,data)=>{
        if(!id) throw new Error("id is required")
            
        return await commanderepository.update(id,data)
    } 
    static suppression = async(id)=>{
        return await commanderepository.suppression(id)
    }
}
export default commandeservice;