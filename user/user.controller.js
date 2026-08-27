import userService from './user.service.js';

class userController{
    static create = async(req,res)=>{
        try {
            const data = req.body
            const result = await userService.create(data)
            res.status(201).json(result)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }
    static getById = async(req,res)=>{
        try {
            const id = req.params.id
            const result = await userService.getById(id)
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }
    static getAll = async(req,res)=>{
        try {
            const result = await userService.getAll()
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }
    static update = async(req,res)=>{
        try {
            const id = req.params.id
            const data = req.body
            const result = await userService.update(id,data)
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }
    static delete = async(req,res)=>{
        try {
            const id = req.params.id
            const result = await userService.delete(id)
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }

    static login = async(req,res)=>{
        try {
            const { email, password } = req.body;
            const result = await userService.login(email, password);
            res.status(200).json(result);
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }
}
export default userController