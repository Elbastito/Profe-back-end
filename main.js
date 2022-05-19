//main.js
const express = require("express");
const main = express();
const rutaParaNotas = require("./rutas/rutasParaNotas");
const conexionDB= require("./config/conexiondb");

//Rutas
main.get("/aaa",(req,res)=>{
    res.send("Pruebas pruebas");
})
main.use("/v1/notas", rutaParaNotas)

//Creacion del servidor
const PORT = 3000;

async function echarAAndar(){
    try{
        await conexionDB()
        main.listen(PORT,()=>{
            console.log(`Server listening on port ${PORT}`);
        })
    }catch(error){
        console.error(error);
    }
}

echarAAndar();



