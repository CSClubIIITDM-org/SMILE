import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Publication from "./pages/Publication";
import Research from "./pages/Research";
// import About from "./pages/About";
import Professor from "./pages/members/Professor.jsx";
import Scholar from "./pages/members/Scholars";
import Facility from "./pages/Facility";
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
          <Route path="/Research" exact component={Research} />
          {/* <Route path="/aboutus" exact component={About} /> */}
          <Route path="/member/professors" exact component={Professor} />
          <Route path="/member/scholars" exact component={Scholar} />
          <Route path="/facility" exact component={Facility} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
