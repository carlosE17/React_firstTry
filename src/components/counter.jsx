import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    texto: "Contador " + this.props.value.value,
    imageUrl: "https://picsum.photos/200",
    tag: [],
  };

  //   constructor() {
  //     super();
  //     this.sumar = this.sumar.bind(this);
  //   }

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        {this.props.children}
        {/* <img src={this.state.imageUrl} alt="error"></img> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.sumar}
          style={this.styles}
          className="btn btn-secondary btn-sm"
        >
          Incrementar
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.value.id)}
        >
          Delete
        </button>
        {this.state.tag.length === 0 && <h6>Agregar etiquetas :v</h6>}
        {this.mostrarLista()}
      </div>
    );
  }

  sumar = () => {
    this.setState({ count: this.state.count + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  mostrarLista() {
    if (this.state.tag.length === 0) return <h6>No hay tags!</h6>;

    return (
      <ul>
        {this.state.tag.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;
