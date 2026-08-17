import commandemodel from "../model/commande.js";

class commanderepository{
    static creationcommande = async(data)=>{
        return await commandemodel.create(data)
    }
    static recuperationId = async(id)=>{
        return await commandemodel.findById(id)
    }
    static toutcommande = async()=>{
        return await commandemodel.find().populate("id_client")
    }
    static update = async(id,data)=>{
        return await commandemodel.findByIdAndUpdate(id,data)
    }
    static suppression = async(id)=>{
        return await commandemodel.findByIdAndDelete(id)
    }

    //recuperation de commande d'un client
    static recuperationcommandeclient = async(clientId)=>{
        return await commandemodel.find({id_client: clientId})
    }
}
export default commanderepository;
  
