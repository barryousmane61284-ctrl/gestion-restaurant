import clientrepository from "../repository/client.repository.js";
import commandeservice from "../../commande/service/commande.service.js";

class clientservice{
    // creation
    static creationclient = async(data)=>{
        return await clientrepository.creationclient(data)
    }
    // recuperation
    static toutclient = async()=>{
        return await clientrepository.toutclient()
    }
    // clients classés par nombre de commandes
    static meilleursClients = async()=>{
        return await clientrepository.meilleursClients()
    }
    // recuperationID
    static recuperationId = async(id)=>{
        const client = await clientrepository.recuperationId(id)
        if(!client){
            throw new Error("Client not found")
        }

        const commandes = await commandeservice.recuperationcommandeclient(client._id)
        return { client, commandes }
    }
    //mise a jour
    static update = async(id,data)=>{
        return await clientrepository.update(id,data)
    }
    // suppression
    static suppression = async(id)=>{
        return await clientrepository.suppression(id)
    }

}
export default clientservice;