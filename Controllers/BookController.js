import { modeloLibros } from "../Models/BookModel.js";//Error de letras

modeloLibros.create([
    {
        "nombre": "To Kill a Mockingbird",
        "año": "1960",
        "autor": "Harper Lee",
    },
    {
        "nombre": "1984",
        "año": "1949",
        "autor": "Juan  Perez",
    }, {
        "nombre": "Torito",
        "año": "1978",
        "autor": "El Inge",
    }, {
        "nombre": "Chismosos",
        "año": "2022",
        "autor": "Avispa",
    },
]);

export const test = () => {//faltaba el export
    console.log("Se han creado los nuevos Libros");//faltaba log
}