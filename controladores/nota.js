//nota.js
const modeloNotas = require("../modelos/Nota");
function notaPadre(req,res){
    res.send("Portada e indice");
}

async function traerNota(req,res){
    const idBuscada = req.params.ID;
    try{
        const notaEncontrada = await modeloNotas.findOne({
            ID: idBuscada
        })
        res.send(notaEncontrada);
    }catch(error){

    }

}

async function crearNota(req,res){
    const idDelPadre = req.params.IDP;
    const idNueva = req.params.ID;
    try{
        const nuevaNota = await modeloNotas.create({
            ID: idNueva,
            IDP: idDelPadre,
            /* titulo: req.body,
            contendio: req.body */
        })
        res.send(nuevaNota);
    }catch(error){
        res.send(error);
    }

}

async function ajustarNota(req,res){
    const idACambiar = req.params.ID;
    try{
        const cambiadaNota = await modeloNotas.updateOne({ID: idACambiar},{ID: "Lo que sea"});
        res.send(cambiadaNota);
    }catch(error){
        res.send(error);
    }
}

async function borrarNota(req,res){
    const idABorrar = req.params.ID;
    try{
        const adeusNota = await modeloNotas.deleteOne({
            ID: idABorrar
        })
        res.send("choa notilla :(");
    }catch(error){
        res.send(error);
    }
}

module.exports = {
    notaPadre,
    traerNota,
    crearNota,
    ajustarNota,
    borrarNota
}