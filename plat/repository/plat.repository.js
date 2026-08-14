import platModel from "../model/plat.js";

class platrepository {
    creationplat = async (Data) => {
        return await platModel.create(Data);
    }

    getallplat = async () => {
        return await platModel.find();
    }
    getplatbyId = async (id) => {
        return await platModel.findById(id);
    }
    updateplat = async (id, Data) => {
        return await platModel.findByIdAndUpdate(id, Data, )
    }
    deleteplat = async (id) => {
        return await platModel.findByIdAndDelete(id);
    }   
}
export default new platrepository();
