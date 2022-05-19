//Creacion del schema
//Nota.js
const mongoose = require("mongoose");

const esquemaLibreta = new mongoose.Schema({
    IDP: {type: String, required: true},
    ID: {type: String,  required: true, unique:true},
    titulo: {type: String},
    contenido: {type: String},
    },{collection: "notas", timestamps: true
})
const libretaModel = mongoose.model("libreta", esquemaLibreta);

module.exports = libretaModel;