
import mongoose from "mongoose"
import ENVIROMENT from "./enviroment.config.js"
/*
mongodb://localhost:27017/
*/

async function connectMongodb() {
    try{
        await mongoose.connect(ENVIROMENT.MONGO_DB_CONNECTION_STRING,{
            timeoutMS: 10000
        })
        console.log("conexion con mongodb fue exitosa")
    }
    catch(error){
        console.log("la conexion con mongodb fallo")
        console.log(error)
    }
}


export default connectMongodb