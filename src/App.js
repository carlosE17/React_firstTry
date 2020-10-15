import React from "react";
import "./App.css";
import Cajita from "./components/cajita";
import Contadores from "./components/Contadores";

function getArraycont(num) {
  let temp = [];
  for (let i = 0; i < num; i++) {
    temp.push({ id: i + 1, value: "C#" + i });
  }
  return temp;
}

function App() {
  return (
    <div>
      <div className="card text-center">
        <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
          <h4>Ejemplo sencillo del uso de React</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <Cajita
                titulo="Columna 1"
                contenido={<Contadores numero={getArraycont(5)} />}
              />
            </div>
            <div className="col-md-4">
              <Cajita
                titulo="Columna 2"
                contenido={<Contadores numero={getArraycont(4)} />}
              />
            </div>
            <div className="col-md-4">
              <Cajita
                titulo="Columna 3"
                contenido={<Contadores numero={getArraycont(3)} />}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <Cajita
          titulo="Mis Datos:"
          contenido="Carlos Rodrigo Estrada Najarro"
        />
      </div>
    </div>
  );
}

export default App;
