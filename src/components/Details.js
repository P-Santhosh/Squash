import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import Header from "./Header";
import Login from "./login";

class Details extends React.Component {
  constructor(props) {
    super(props);
    const userData = JSON.parse(localStorage.getItem("user"));
    this.state = {
      user: userData.data[0],
    };
  }
  onClick = (event) => {
    //localStorage.removeItem("user");
    this.props.history.push("./home");
  };

  render() {
    return (
      <div>
        <Header></Header>
        <h1 className="details">
          Hello {this.state.user.employee_name} !!!!!!
        </h1>
        <hr></hr>
        <div>
          <h3 className="details">Your's details are......</h3>
          <ol className="ans">
            <b> Name :</b>
            {this.state.user.employee_name}
            <br />
            <b> Email :</b>
            {this.state.user.email}
            <br />
            <b> Age :</b>
            {this.state.user.age}
            <br />
          </ol>
        </div>
        <hr></hr>
        <p></p>
        
      </div>
    );
  }
}

export default withRouter(Details);
// after<hr><button  onClick={this.onClick}>Log Out</button>
