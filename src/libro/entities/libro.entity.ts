import * as mongoose from 'mongoose'

export const Libro = new mongoose.Schema({

    id:          Number,
    titulo:      String,
    lanzamiento: String

});


