import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cajita from "./components/cajita";

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
              <Cajita titulo="Columna 1" />
            </div>
            <div className="col-md-4">
              <Cajita titulo="Columna 2" />
            </div>
            <div className="col-md-4">
              <Cajita titulo="Columna 3" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card text-center w-100">
          <div className="card-header bg-light text-black  d-flex justify-content-between align-items-center">
            Mis Datos
          </div>
          <div className="card-body">
            Carlos Rodrigo Estrada Najarro 13/10/2020
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
