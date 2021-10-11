import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Main } from './containers/common/main/Main';
import { Header } from './containers/common/header/Header';
import { Footer } from './containers/common/footer/Footer';
import { SystemHelper } from './helper/SystemHelper';

import './style/style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <Switch>{/* code goes here */}</Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
