import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App/App";
import GlobalStyle from "./components/GlobalStyle";
import rootStore from "./stores/rootStore";

ReactDOM.render(
  <Provider store={rootStore}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
