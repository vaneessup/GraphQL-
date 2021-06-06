import mongoose from "mongoose";//importando la conexion de mongoDB


export async function connect(){
    //async para await, para que al terminar de conectarse me muestre el mensaje en pantalla
    //un try catch por si hay error
    try {
        await mongoose.connect('mongodb://localhost/BaseDatos', {
        userNewUrlParser: true
        })
        console.log(">>BASE DE DATOS CONECTADA<<");
    } catch (error) {
        console.log("Algo va mal...");
        console.log(error);
    }
}