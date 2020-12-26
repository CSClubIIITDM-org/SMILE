import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomPage";
import Topbar from "./partials/Topbar";
import "./styles/style.css";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Topbar />
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
