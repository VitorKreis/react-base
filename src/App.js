import React from "react";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import history from "./services/history";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/header/index";
import Rotas from "./routes";

function App() {
  return (
    <Router history={history}>
      <Header />
      <GlobalStyles />
      <ToastContainer autoClose={2000} className="toastify-Container" />
      <Rotas />
    </Router>
  );
}

export default App;
