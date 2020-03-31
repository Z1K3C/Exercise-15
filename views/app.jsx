//Genero las vistas para mi aplicacion
//todo el codigo de esta carpeta se debe convertir a bundle.js
//Con webpack como empaquetdor remember: npx webpack (teniendo bien configurado el webpack.config.js)
//y usando a babel como traspilador para convertir de JSX a JS (tenieno bien configurado a .babelrc)
import React, { Component } from 'react';                   //Solicito a REACT desde node modules
import ReactDOM from 'react-dom';                           //Solicito a REACT-DOM para trabajar con el DOM virtual
import 'bootstrap/dist/css/bootstrap.css';                  //Solicito a bootstrap como libreria de CSS
import SECTION_1 from './SECTION_1.jsx';                    //Solicito la seccion de codigo generado en SECTION_1
import SECTION_2 from './SECTION_2.jsx';                    //Solicito la seccion de codigo generado en SECTION_2

class App extends Component {                               //Renderizo las etiquetas
  render() {
    return (
      <div>
        <section className="container-flow">
            <div className="row mx-0">
              <div className="col-md-12 col-lg-5 p-2" style={{minHeight:"20vh"}}>

                <SECTION_1/>

              </div>
              <div className="col-md-12 col-lg-7 p-2" style={{minHeight:"20vh"}}>

                <SECTION_2/>

              </div>
            </div>
          </section>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));    //Lanzo a la etiqueta App en la id "app" del HTML