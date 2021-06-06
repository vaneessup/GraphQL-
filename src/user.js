//base de datos MongoDB
//para guardar datos dentro de mi base de datos


import { Schema, model } from "mongoose";

const userSchema = new Schema({
    firstname: {
        type: String,//nombre requerido para todos los usuarios
        requiered: true
    },
    lastname: String,//todos usuarios un apellido
    age: Number//edad de todos los usuarios
})

export default model('User', userSchema)//exportando el objeto model