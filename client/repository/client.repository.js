import clientmodel from "../model/client.js";

class clientrepository {
    // creation d'un client
    static creationclient = async(data)=>{
        return  await clientmodel.create(data)
    }
    // recuperation d'un client par id
    static recuperationId = async(id)=>{
        return  await clientmodel.findById(id)
    }
    // recuperation de tout les client
    static toutclient = async()=>{
        return await clientmodel.find()
    }
    // mise a jour
    static update = async(id, data)=>{
        return await clientmodel.findByIdAndUpdate(id,data)
    }
    // suppresion
    static suppression = async(id)=>{
        return await clientmodel.findByIdAndDelete(id)
    }
}
export default clientrepository;