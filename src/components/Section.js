import React, { Component } from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import Banner from "./Banner";
import Cart from "./Cart";


class Section extends React.Component {
  render() {
    return (
      <div>
        <Section>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/banner" component={Banner}></Route>

        </Section>
      </div>
    );
  }
}

export default Section;
