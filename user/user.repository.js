import { deleteModel } from "mongoose"
import userModel from "./model/user.model.js"

class userRepository{
    static create = async(data)=>{
        return await userModel.create(data)
    }
    static getById = async(id)=>{
        return await userModel.findById(id)
    }
    static getAll = async()=>{
        return await userModel.find()
    }
    static update = async(id,data)=>{
        if(!id) throw new Error("id is required")
            
        return await userModel.findByIdAndUpdate(id,data,{new:true})
    } 
    static delete = async(id)=>{
        return await userModel.findByIdAndDelete(id)
    }

    //verification si lemail existe deja
    static getByEmail = async(email)=>{
        return await userModel.findOne({email})
    }
}
export default userRepository;