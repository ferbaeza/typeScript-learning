import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router} from './rutas/index'
import { database } from './config/database'
// import { connect, endConnection } from "./config/database";

const PORT  = process.env.PORT || 3000


const app = express()
app.use(cors())
app.use(express.json())
app.use(router);

database().connect()
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
