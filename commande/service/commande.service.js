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
        return await commanderepository.update(id,data)
    }
    static suppression = async(id)=>{
        return await commanderepository.suppression(id)
    }

    static recuperationcommandeclient = async(clientId)=>{
        const client = await commanderepository.recuperationcommandeclient(clientId)
        if(!client){
            throw new Error("Client not found")
        }
        return client
    }
}
export default commandeservice;