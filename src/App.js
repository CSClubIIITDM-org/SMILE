import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Publication from "./pages/Publication";
import Research from "./pages/Research";
import Facility from "./pages/Facility";
import Topbar from "./partials/Topbar";
import Footer from "./partials/Footer";
import Member from "./pages/Member";
import "./styles/style.css";
import Cultural from "./pages/Cultural";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Topbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Publication" exact component={Publication} />
          <Route path="/Research" exact component={Research} />
          <Route path="/member" exact component={Member} />
          <Route path="/facility" exact component={Facility} />
          <Route path="/culturalactivity" exact component={Cultural} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
