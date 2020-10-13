import React, { Component } from "react";
import Counter from "./counter";

class Contadores extends Component {
  state = {
    Counters: [
      { id: 1, value: "A" },
      { id: 2, value: "B" },
    ],
  };
  render() {
    return (
      <div>
        {this.state.Counters.map((contador) => (
          <Counter key={contador.id} value={contador.value} />
        ))}
      </div>
    );
  }
}

export default Contadores;
