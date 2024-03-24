import React, { Component } from "react";
import "../style.css";

class Form extends Component {
  state = {
    name: "",
    quantity: 0,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addArticle(this.state);
    this.setState({ name: "", quantity: 0 });
  };

  render() {
    return (
      <div>
        <h3>{this.props.formTitle}</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            className="quantity"
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
          <button className="btn btn-success" type="submit">
            Ajouter
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
