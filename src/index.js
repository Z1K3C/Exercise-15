//Inicializo servidor
const express = require('express');                                 //Solicito a express desde node modules
const path = require('path');                                       //Solicito el metodo path desde node modules
const server = express();                                           //Instancio a express para usar sus metodos

//Settings
server.set('port',process.env.PORT || 3000);                        //Declaro una variable con el numero del puerto en formato Express

//Middlewares
server.use(express.json());                                         //Utilizo el middleware para usar JSONs

//Routes
server.use(require('./routess.js'));                                //Solicito la seccion de routes con todas las Rest API

//Static files
server.use(express.static(path.join(__dirname, '../public')));      //Solicito el index.html generado en public

//Iniciando el servidor
server.listen(server.get('port'), function(){                       //Creo al servidor
    console.log(`Server on port ${server.get('port')}`);            //Imprimo en pantalla el status del servidor
});