import platrepository from "../repository/plat.repository.js";

class platservice {
    // creer un plat
    creationplat = async (Data) => {
        return await platrepository.creationplat(Data);
    }
    // recuperer tous les plats
    getallplat = async () => {
        return await platrepository.getallplat();
    }
    // recuperer un plat par son id
    getplatbyId = async (id) => {
        return await platrepository.getplatbyId(id);
    }
    // mettre a jour un plat
    updateplat = async (id, Data) => {
        return await platrepository.updateplat(id, Data);
    }
    // supprimer un plat
    deleteplat = async (id) => {
        return await platrepository.deleteplat(id);
    }
}

export default new platservice