import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      action.payload.id = Date.now();
      const newState = [...state, action.payload];
      return newState;
    case "EDIT_ARTICLE":
      const articleId = action.payload.id;
      return state.map((article) => {
        if (article.id !== articleId) {
          return article;
        }
        return action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ articles: articleReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
