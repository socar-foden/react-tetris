import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App/App";
import GlobalStyle from "./components/GlobalStyle";
import rootStore from "./stores/rootStore";
ReactDOM.render(React.createElement(Provider, { store: rootStore },
    React.createElement(GlobalStyle, null),
    React.createElement(App, null)), document.getElementById("root"));
//# sourceMappingURL=index.js.map