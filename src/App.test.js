import React from "react";
import ReactDOM from "react-dom";
import configureStore from "../src/redux/createStore";

import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const store = configureStore();
  ReactDOM.render(<App store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
