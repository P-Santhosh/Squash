import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pageone from "./components/Pageone";
import Pagetwo from "./components/Pagetwo";
import Pagethree from "./components/Pagethree";
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <Switch>
            <Route exact path="/" component={Pageone} />
              <Route exact path="/company_details" component={Pagetwo} />
              <Route path="/email_verification" component={Pagethree} />
              
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
/*import React, { Component, useState } from "react";
import "./App.css";
import Crud from "./components/Crud";

class App extends React.Component {
  render() {
    return (
      <>
      <Crud />
      </>
    );
  }
}

export default App;*/
