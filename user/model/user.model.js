import {Schema,model} from 'mongoose'


const userSchema = new Schema({
    nom : String,
    prenom : String,
    email : String,
    password : String
})

const userModel  = model("user", userSchema)

export default userModel