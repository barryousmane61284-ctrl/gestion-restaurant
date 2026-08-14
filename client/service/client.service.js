import clientrepository from "../repository/client.repository.js";

class clientservice{
    // creation
    static creationclient = async(data)=>{
        return await clientrepository.creationclient(data)
    }
    // recuperation
    static toutclient = async()=>{
        return await clientrepository.toutclient()
    }
    // recuperationID
    static recuperationId = async(id)=>{
        return await clientrepository.recuperationId(id)
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