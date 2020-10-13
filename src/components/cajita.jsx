import React, { Component } from "react";
import Contadores from "./Contadores";

class Cajita extends Component {
  state = {
    titulo: this.props.titulo,
  };
  render() {
    return (
      <div className="card text-center w-100">
        <div className="card-header bg-light text-black  d-flex justify-content-between align-items-center">
          {this.state.titulo}
        </div>
        <div className="card-body">
          <Contadores />
        </div>
      </div>
    );
  }
}

export default Cajita;
