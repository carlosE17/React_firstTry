import React, { Component } from "react";

class Cajita extends Component {
  state = {
    titulo: this.props.titulo,
    contenido: this.props.contenido,
  };
  render() {
    return (
      <div className="card text-center w-100">
        <div className="card-header bg-light text-black  d-flex justify-content-between align-items-center">
          {this.state.titulo}
        </div>
        <div className="card-body">{this.state.contenido}</div>
      </div>
    );
  }
}

export default Cajita;
