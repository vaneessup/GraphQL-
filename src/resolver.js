//crear funciones
//aqui se hacen las consultas y se le muestra al cliente


import { tasks } from "./sample";
import User from "./user";//importando el modelo de usuario
//import { createSourceEventStream } from "graphql";


export const resolver = {
    Query: {
        hello: () => {
            return `Hola`
        },
        //
        saludar(root, {name}, ctx){
            console.log(ctx)
            return 'Hola '+ name
        },
        tasks(){
            return tasks;
        },
        async Users(){//consulta a la bd para mostrar los datos usuarios guardados
            return await User.find()
        }
    },
    //Mutaciones
    //metodo create user para crear usuarios
    //en la base de datos
    //para guardar se usa User y recibe como parametro el usuario que se creo

    Mutation:{
        createTask(_, {input}){//recibiendo una entrada
            input._id = tasks.length;//lomgitud de las tareas, para poder crearles el id, segun las tareas que tenga
            tasks.push(input);//
            return input;//retornando la tarea que ingrese al arreglo
        },
        async createUser(_, {input}){
            const newUser = new User(input)
            await newUser.save()//metodo asincrono para guardar datos
            return newUser;//mostrando el nuevo usuario
        },
        async deleteUser(_, {_id}){
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_, {_id, input}){
            return await User.findByIdAndUpdate(_id,input,{new:true});
        }
    }
};