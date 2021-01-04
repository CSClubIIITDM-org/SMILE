import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomPage';
// import Topbar from './components/Topbar';
import ComponentsPage from './pages/ComponentsPage';
import './styles/style.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Topbar /> */}
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/components' component={ComponentsPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
