//Configuro las rutas hacia mi servidor

const express = require('express');               //Solicito a Express
const router = express.Router();                  //Solicito solo el metodo Routes de Express
const DBconnection = require('./database.js');    //Instancio a database.js para usar sus metodos

//SELECT ALL DATA
router.get('/SQL',function(req1,res1){               //Mediante el metodo GET realizo una consulta
  DBconnection.query("SELECT * FROM [EXAMPLE].[dbo].[TABLE_0]",   //Genero el query...
  function(err2,res2){                            //y despues ejecuto una funcion
    if(err2){                                     //Si hay un error lo imprime en pantalla
      console.log(err2);
      throw err2;
    }
    else{                                         //Si no hay error...
      //console.log("Todos los datos");             //Imprime en consola todos los datos
      res1.status('200').json(res2);              //Imprimo en el explorador todos los datos
    }
  });
});

router.get('/GRAPH_0',function(req1,res1){
  DBconnection.query("SELECT TOP 50 [DATE_],[VALUE] FROM [EXAMPLE].[dbo].[GRAPH_0] ORDER BY [DATE_] DESC",   //Genero el query...
  function(err2,res2){                            //y despues ejecuto una funcion
    if(err2){                                     //Si hay un error lo imprime en pantalla
      console.log(err2);
      throw err2;
    }
    else{                                         //Si no hay error...
      //console.log("Todos los datos");             //Imprime en consola todos los datos
      res1.status('200').json(res2);              //Imprimo en el explorador todos los datos
    }
  });
});

// INSERT DATA
router.post('/SQL',function(req1,res1){              //Mediante el metodo POST realizo una consulta
  const {id, data} = req1.body;                   //De los datos recibidos por POST solo solicito la id y la data
  DBconnection.query("INSERT INTO [EXAMPLE].[dbo].[TABLE_0] ([ID],[DATA]) VALUES (" + id + "," + data + ")",    //genero el query del tipo INSERT
  function(err2,res2){                            //y despues ejecuto una funcion
    if(err2){                                     //Si hay un error lo imprime en pantalla
      console.log(err2);
      throw err2;
    }
    else{                                         //Si no hay error...
      if(res2["rowsAffected"]==1){                //Si el objeto RowsAffect me regresa un uno...
        console.log("Dato insertado");            //Imprimo en la consola y en pantalla el estatus
        res1.status('200').send("Dato insertado");  
      }                              
    }
  });
});

//UPDATE DATA
router.put('/SQL/:id', (req1, res1) => {              //Mediante el metodo PUT realizo una consulta
  const { data } = req1.body;                     //De los datos recibidos por POST solo solicito la data
  const { id } = req1.params;                     //Del entero ingresado despues del SLASH "/" almaceno el id
  DBconnection.query("UPDATE [EXAMPLE].[dbo].[TABLE_0] SET [DATA] = " + data + "WHERE [ID] = " + id,           //genero el query del tipo UPDATE
  function(err2,res2){                            //y despues ejecuto una funcion
    if(err2) {                                    //Si hay un error lo imprime en pantalla
      console.log(err2);
      
    } else {                                      //Si no hay error...
      if(res2["rowsAffected"]==1){                //Si el objeto RowsAffect me regresa un uno...
        console.log("Dato actualizado");          //Imprimo en la consola y en pantalla el estatus
        res1.status('200').send("Dato actualizado");
      }    
    }
  });
});

//DELETE DATA
router.delete('/SQL/:id', (req1, res1) => {           //Mediante el metodo PUT realizo una consulta
  const { id } = req1.params;                     //Del entero ingresado despues del SLASH "/" almaceno el id
  DBconnection.query("DELETE FROM [EXAMPLE].[dbo].[TABLE_0]	WHERE [ID] = " + id,                              //genero el query del tipo DELETE
  function(err2,res2){                            //y despues ejecuto una funcion
    if(err2) {                                    //Si hay un error lo imprime en pantalla
      console.log(err2);
      
    } else {                                      //Si no hay error...
      if(res2["rowsAffected"]==1){                //Si el objeto RowsAffect me regresa un uno... 
        console.log("Dato eliminado");            //Imprimo en la consola y en pantalla el estatus
        res1.status('200').send("Dato eliminado");
      }    
    }
  });
});

module.exports = router;                          //Exporto las rutas, sus metodos y funciones