import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import Header from "./Header";

class Logout extends React.Component {
  constructor(props) {
    super(props);
    const userData = JSON.parse(localStorage.getItem("user"));
    this.state = {
      user: userData.data[0],
    };
  }
  onClick = (event) => {
    localStorage.removeItem("user");
    this.props.history.push("./");
  };
  onClickhome = (event) => {
    this.props.history.push("./");
  };

  render() {
    return (
      <div>
        <Header></Header>
        <button className="center" onClick={this.onClick}>
          Log Out
        </button>
        <p></p>
        
      </div>
    );
  }
}

export default withRouter(Logout);
