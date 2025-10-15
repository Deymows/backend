import ENVIROMENT from "./config/enviroment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import workspace_router from "./routes/worckspace.routes.js";




connectMongoDB()

import express, { response } from 'express'
import auth_router from "./routes/aouth.router.js";
import UserRepository from "./repositories/user.repositories.js";
import MemberWorkspaceRepository from "./repositories/memberWorkspace.js";
import cors from 'cors'
import authMiddleware from "./middleware/auth.middleware.js";



const app = express()

app.use(cors())
app.use(express.json())


app.use('/api/workspace', workspace_router)
app.use('/api/auth', auth_router)




app.get('/ruta-protegida', authMiddleware, (request, response) => {
    console.log(request.user)
    response.send({
        ok: true
    })
})


app.listen(
    8080,
    () => {
        console.log("Esto esta funcionado")
    }
)

