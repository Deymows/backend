import mongoose from "mongoose";


//el esque ma tiene los contratos de que es un user en la coleccion de usuaruios
const userSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: true 
        },
        email: { 
            type: String, 
            unique: true, 
            required: true 
        },
        password: { 
            type: String, 
            required: true 
        },
        verified_email: {
            type: Boolean,
            required: true,
            default: false
        },
        creater_at: { 
            type: Date, 
            default: Date.now 
        },
        modified_at: { 
            type: Date
        },
        active: { 
            type: Boolean, 
            default: true 
        }
    }
)

//crear el modelo de user, cada accion que hagamos a la coleccion se hara por medio del modelo

const users = mongoose.model("user", userSchema)


export default users