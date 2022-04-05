import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// import { Provider } from "react-redux";
import { setupStore } from "./store/store";

const store = setupStore();

// ReactDOM.render(
// <>
//     <App />
// </>,
//   document.getElementById("root")
// );
const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render( <Provider store={store}><App /></Provider>);