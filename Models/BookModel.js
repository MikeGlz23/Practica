import { Schema, model } from "mongoose"

const EsquemaDeLibros = new Schema({
    nombre: {
        type: String,
    },
    año: {
        type: String,
    },
    autor: {
        type: String,
    },
}, {Collection: 'Libros'} )

export const modeloLibros = model("Registro de Libros ncontrados", EsquemaDeLibros)