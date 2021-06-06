import {makeExecutableSchema} from "graphql-tools";//para crear esquema nuevo 
//une resolvers y types
import {resolver} from "./resolver"

//signo de admiracion en String para que marque error
//si no hay un nombre
//la consulta task devuelve un arreglo tipo Task
//user devuelve arreglo tipo usuario
//task devuelve las tareas que hice en sample
//type mutation permite hacer consulta desde el cliente pero enviar datos
//para hacerle cambios en el servidor
//task input para pasar los datos de task

const typeDefs = `
    type Query{
        hello: String
        saludar(name: String!): String
        tasks: [Task]
        Users: [User]
    }

    type Task{
        _id: ID
        title: String!
        description: String!
        number: Int
    }
    type User{
        _id: ID
        firstname: String!
        lastname: String!
        age: Int
    }

    type Mutation{
        createTask(input: TaskInput): Task
        createUser(input: UserInput ): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User
    }

    input TaskInput{
        title: String!
        description: String!
        number: Int
    }
    input UserInput{
        firstname: String!
        lastname: String!
        age: Int
    }
`;
//consulta para pedir usarios 'createUser
//input userInput para crear usuario nuevo
//! para indicar que es estrictamente necesario



export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolver
})