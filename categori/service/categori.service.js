import categorirepository from '../repository/categori.repository.js';

class categoriservice{
    static creationcategori = async(data)=>{
        return await categorirepository.creationcategori(data)
    }
    static recuperationId = async(id)=>{
        return await categorirepository.recuperationId(id)
    }
    static toutcategori = async()=>{
        return await categorirepository.toutcategori()
    }
    static update = async(id,data)=>{
        return await categorirepository.update(id,data)
    }
    static suppression = async(id)=>{
        return await categorirepository.suppression(id)
    }
}
export default categoriservice;