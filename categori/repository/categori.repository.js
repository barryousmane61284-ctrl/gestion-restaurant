import categorimodel from "../model/categori.js";

class categorirepository {
    // creation d'une categorie
    static creationcategori = async(data)=>{
        return  await categorimodel.create(data)
    }
    // recuperation d'une categorie par id
    static recuperationId = async(id)=>{
        return  await categorimodel.findById(id)
    }
    // recuperation de tout les categories
    static toutcategori = async()=>{
        return await categorimodel.find()
    }
    // mise a jour
    static update = async(id, data)=>{
        return await categorimodel.findByIdAndUpdate(id,data)
    }
    // suppresion
    static suppression = async(id)=>{
        return await categorimodel.findByIdAndDelete(id)
    }
}
export default categorirepository;


