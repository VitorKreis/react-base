import React from "react";
import { Router } from "react-router-dom";

import history from "./services/history";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/header/index";
import Rotas from "./routes";

function App() {
  return (
    <Router history={history}>
      <Header />
      <GlobalStyles />
      <Rotas />
    </Router>
  );
}

export default App;
