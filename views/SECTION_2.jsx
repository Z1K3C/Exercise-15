//Seccion de codigo la cual genera una tabla
import React, { Component } from 'react';     //Solicito a REACT desde node modules
import 'bootstrap/dist/css/bootstrap.css';    //Solicito a Bootstrap
import Plot from 'react-plotly.js';
import Myquerys from '../src/class.js';       //Solicito la clase exportada en class.js
const querys = new Myquerys();                //Utilizo los metodos/funciones de class.js instanciandolo en querys
var afterdata = {};
var beforedata = {};
var parley = {};
var onlyDate = [''];
var loop = 0;
var myMnth = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];

parley = {
  responsive: true,
  paper_bgcolor:'rgba(0,0,0,0)',
  plot_bgcolor:'rgba(0,0,0,0)',
	margin: { l: 30,r: 30,b: 110, t: 30, pad: 2 },
	xaxis:{
    dtick: 1,
    gridcolor: 'rgb(15,100,80)',
    tickfont: {
      size: 12,
      color: 'rgb(255,255,255)'
    }
	},
	yaxis: { 
		range: [0, 101],
    dtick: 10,
    gridcolor: 'rgb(15,100,80)',
    tickfont: {
      size: 12,
      color: 'rgb(255,255,255)'
    }
	},
};
var options = {
	responsive: true,
	displayModeBar : false,
	modeBarButtonsToRemove: ['sendDataToCloud',
	 'zoom2d', 'pan2d', 'select2d', 'lasso2d', 'zoomIn2d','toImage' , 'autoScale2d',
	 'hoverClosestCartesian', 'hoverCompareCartesian','toggleSpikelines' ],
	 displaylogo: false, 
	 showTips: false,
};	

beforedata = {
  x:  [],
  y:  [],
  type: 'scatter',
  mode: 'lines',
  line: {
    color: 'rgb(26,188,156)',
    width: 3
  }
};

class SECTION_2 extends Component {           //Genero una clase SECTION_1

  constructor(props) {                        //Genero al constructor para inicializar propiedas y variables
    super(props);                             //Declaramos super para adaptar las propiedades en React
    this.state = {                            //Declaramos los estados de las propiedades    
      propsdata: {}
    };          
  }

  componentDidMount() {                                   //Metodo de REACT encargada de mandar llamar una funcion antes de montar el componente de REACT
    this.timerID = setInterval(()=>this.refesh(),1000);   //Mediante una funcion flecha ejecuto la subrutina refresh cada segundo
  }

  componentWillUnmount() {                                //Metodo de REACT encargado de mandar llamar una fucnion despues de montar el componente de REACT
    clearInterval(this.timerID);                          //Detiene o limpia al timer "timerID"
  }

  refesh() {                                              //Declaro a la funcion refresh

    querys.getdataGRAPH_0().then(function(resp){              //Mando llamar al metodo getdataSQL y solicito una promesa
      loop = (resp['rowsAffected']);
      for(var i=0;i<loop;i++){
        beforedata["y"][i] = resp['recordset'][i]['VALUE'];
        onlyDate = String(resp['recordset'][0]['DATE_']).search('Z');
        onlyDate = new Date(String(resp['recordset'][0]['DATE_']).slice(0,onlyDate));
        beforedata["x"][i] = String((i+1) +"- "+onlyDate.getHours()+ "hr " + onlyDate.getDate() +"/" + myMnth[(onlyDate.getMonth())]); 
        //beforedata["x"][i] = i;      
      }  

    });
    afterdata = { x:[] ,y: beforedata["y"] ,type: beforedata["type"] ,mode: beforedata["mode"] ,line: beforedata["line"]};
    for(var i=0; i<loop ;i++)
      afterdata["x"][i] = beforedata["x"][i];


    this.setState({                                       
      propsdata: afterdata
    });




  }

  render() {                                              
    return (
      <div> 
        <div className="card mx-4" style={{backgroundColor:"rgb(52,73,94)"}}>

          <div className="card-header text-center text-white p-1">Plotly.js and React.js</div>

          <section className="container-flow">
            <div className="row mx-0 justify-content-around">
              <div className="col-lg-12 card p-0" style={{backgroundColor:"transparent",borderColor:"rgb(26,188,156)",height:"450px"}}>
                
                <Plot data={[this.state.propsdata]} layout={parley} config={options}/>
              
              </div>
            </div>
          </section>
        </div>
      </div>
     );
  }
}

export default SECTION_2;