import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    quantity: 0,
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h3>Ajouter des articles à acheter</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            placeholder="Quantité"
            value={this.state.quantity}
            onChange={(e) => this.setState({ quantity: e.target.value })}
          />
          <input
            type="text"
            placeholder="Article"
            value={this.state.name}
            onChange={(event) => this.setState({ name: event.target.value })}
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
  }
}

export default Form;
