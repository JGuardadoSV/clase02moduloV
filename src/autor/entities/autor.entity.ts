import { Libro } from "src/libro/entities/libro.entity";
import * as mongoose from 'mongoose'

export const Autor = new mongoose.Schema({


    idAutor:   Number,
    nombre:    String,
    categoria: String,
    libros:    [Libro]

});


