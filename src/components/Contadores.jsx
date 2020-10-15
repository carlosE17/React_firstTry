import React, { Component } from "react";
import Counter from "./counter";

class Contadores extends Component {
  state = {
    Counters: this.props.numero,
  };

  handleDelete = (counterId) => {
    console.log(counterId);
    const temp = this.state.Counters.filter((c) => c.id !== counterId);
    this.setState({ Counters: temp });
  };

  render() {
    return (
      <div>
        {this.state.Counters.map((contador) => (
          <Counter
            key={contador.id}
            value={contador}
            onDelete={this.handleDelete}
          >
            <h4>Contador #{contador.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Contadores;
