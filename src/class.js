//Ingreso los metodos de consulta a la base de datos

class Myquerys{                                     //Declaro una clase
    constructor() {                                 //Genero un constructor para inicializar variables
      this.URI = `http://192.168.0.155:3000/SQL`;       //Ingreso la IP de la REST API y poder consultar datos de la DB
    }
  
    async getdataSQL() {                            //Genero una funcion asincrona
      const response = await fetch(this.URI,{method: 'GET'});       //Mediante el metodo FETCH realizo una consulta
      const myjson = await response.json();         //Dicha consulta me responde con un JSON
      return myjson;                                //Retorno el JSON generado
    }

    async getdataGRAPH_0() {                            //Genero una funcion asincrona
      const response = await fetch('http://192.168.0.155:3000/GRAPH_0',{method: 'GET'});       //Mediante el metodo FETCH realizo una consulta
      const myjson = await response.json();         //Dicha consulta me responde con un JSON
      return myjson;                                //Retorno el JSON generado
    }
  };

  export default Myquerys;                          //Exporto la clase