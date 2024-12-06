import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import { test } from './Controllers/BookController.js'//faltaba import y error en controllers


mongoose.connect(process.env.url)//mal escrito mongoose
.then(() => {
        console.log('Coneccion exitosa')
})
.catch((err) => {
        console.log(err)
})

const app = express()//sin const
app.use(cors())

app.listen(4000, ()=> {
    console.log('Servidor en el puerto 4000')//sin log
})

test()