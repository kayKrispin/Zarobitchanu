import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/createStore";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "antd/es/pagination/style/index.css";
import "antd/es/spin/style/index.css";
import "antd/es/avatar/style/index.css";
import "antd/es/skeleton/style/index.css";
import "antd/es/switch/style/index.css";
import "antd/es/col/style/index"
import "./assets/styles/index.scss";


import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Configure font-awesome
library.add(fas, far, fab);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
