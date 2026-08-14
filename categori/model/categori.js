import { Schema, model } from "mongoose";
import { string } from "yup";

const categorichema = new Schema({
    nom: {
        type: String,
        required: true
    },
    description:{
        type: String,
        trim: true,
        required: true
    }
 },
 { timestamps: true }
)
const categorimodel = model("categori",categorichema)
export default categorimodel