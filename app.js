import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import { test } from './Controllers/BookController.js'


mongoose.connect(process.env.url)
.then(() => {
        console.log('Coneccion exitosa')
})
.catch((err) => {
        console.log(err)
})

const app = express()
app.use(cors())

app.listen(4000, ()=> {
    console.log('Servidor en el puerto 4000')
})

test()