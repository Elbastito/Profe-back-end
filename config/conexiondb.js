// conexion.js
const mongoose = require("mongoose");
const URI="WWWW";


//Conexion a la base de datos (Mongo Atlas)
const conexionBD = function(url){
    return mongoose.connect(URI);
}
module.exports = conexionBD;
