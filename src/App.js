import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomPage";
import Publication from "./pages/Publication";
import Topbar from "./partials/Topbar";
import "./styles/style.css";
import Footer from "./partials/footer"; 

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Topbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Publication" exact component={Publication} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
