import express from "express"
//funcion que procesara una ruta cuando entre en ella
import {graphqlHTTP} from "express-graphql";
import schema from "./types";

import { connect } from "./db";

const app = express();
connect();


app.get('/', (req, res) => {
    res.json({
        message: 'Buenaaaasss'
    })
});

//integrar graphql en express
app.use('/graph', graphqlHTTP({
    //para que muestre la herramienta para hacer consultas
    graphiql: true,
    //
    schema: schema,
    
}))


app.listen(3000,()=>console.log('>>>Conectado el servidor en el puerto 3000<<<'))