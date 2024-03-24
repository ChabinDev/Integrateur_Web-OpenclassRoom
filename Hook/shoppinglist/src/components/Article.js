import React, { Component } from "react";
import "../style.css";

class Article extends Component {
  state = { isInEditMode: false };

  toggleEditMode = () => {
    this.setState({ isInEditMode: !this.state.isInEditMode });
  };

  handleQuantityEdit = (e, article) => {
    article.quantity = e.target.value;
    this.props.editArticle(article);
  };

  handleNameEdit = (e, article) => {
    article.name = e.target.value;
    this.props.editArticle(article);
  };

  render() {
    return (
      <div>
        <button
          className="'btn btn-warning btn-xs edit"
          onClick={() => this.toggleEditMode()}
        >
          Modifier
        </button>
        {this.state.isInEditMode ? (
          <span>
            <input
              type="number"
              value={this.props.data.quantity}
              onChange={(e) => this.handleQuantityEdit(e, this.props.data)}
            />
            <input
              type="text"
              value={this.props.data.name}
              onChange={(e) => this.handleNameEdit(e, this.props.data)}
            />
          </span>
        ) : (
          <span>
            {this.props.data.quantity} {this.props.data.name}
          </span>
        )}
      </div>
    );
  }
}

export default Article;
