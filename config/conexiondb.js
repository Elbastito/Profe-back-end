// conexion.js
const mongoose = require("mongoose");
const URI="mongodb+srv://root:popotubo@cluster0.xtfqr.mongodb.net/libreta?retryWrites=true&w=majority";


//Conexion a la base de datos (Mongo Atlas)
const conexionBD = function(url){
    return mongoose.connect(URI);
}
module.exports = conexionBD;
