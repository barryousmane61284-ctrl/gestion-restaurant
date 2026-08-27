import userrepository from "./user.repository.js";
import bcrypt from "bcrypt"
import GetAllUsersDto from "./dto/getall.dto.js";
import JwtUtils from "../commun/utils/jwt.utils.js";

class userservice{
    static create = async(data)=>{
        //verification si lemail existe deja
        const user = await userrepository.getByEmail(data.email)
        if(user) throw new Error("email already exists")

        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;
        const newUser = await userrepository.create(data)
        
        const token = JwtUtils.generateAccessToken({ id: newUser.id, email: newUser.email });

        return { user: newUser, token };
    }
        static getById = async(id)=>{
        return await userrepository.getById(id)
    }
    static getAll = async()=>{
        const users = await userrepository.getAll()
        return users.map(user => new GetAllUsersDto(user.id, user.nom, user.email, user.prenom))
    }
    static update = async(id,data)=>{
        if(!id) throw new Error("id is required")
            
        return await userrepository.update(id,data)
    } 
    static delete = async(id)=>{
        return await userrepository.delete(id)
    }

    static login = async(email, password) => {
        const user = await userrepository.getByEmail(email);
        if (!user) {
            throw new Error("Invalid email or password");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
        }

        const token = JwtUtils.generateAccessToken({ id: user.id, email: user.email });
        return { token };
    }
}
export default userservice;