/*import React from 'react';
import Details from './Details';
import Login from './login';


const Home = () => {
  return (
    <>
    <Login />
   
    </>
  );
};

export default Home;
*/

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

import Header from "./Header";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  onClick = (event) => {
    this.props.history.push("./create");
  };
  onClicklogin = (event) => {
    this.props.history.push("./login");
  };
  onClickview = (event) => {
    this.props.history.push("./view");
  };
  onClickdelete = (event) => {
    this.props.history.push("./delete");
  };
  onClickupdate = (event) => {
    this.props.history.push("./update");
  };
  onClicklogout = (event) => {
    this.props.history.push("./logout");
  };

  render() {
    return (
      <div>
        <Header></Header>
        <h1 className="text-center font-bold text-3xl pt-10 pb-6">Welcome to Home page </h1>
        <hr className="border-2"></hr>
        <p></p>
        <div className="px-80  ml-56">
        <img
            alt="..."
            className=" w-96  h-96"
            src="/img/logo.png"
          /></div>
        {/*<button className="center" onClick={this.onClick}>
          Click here to go Sign in page
    </button>
        <br />
        <button className="center" onClick={this.onClicklogin}>
          Click here to go Login in page
        </button>
        <br />
        <button className="center" onClick={this.onClickview}>
          Click here to See all employee details
        </button>
        <br />
        <button className="center" onClick={this.onClickdelete}>
          Click here to go delete employee details
        </button>
        <br />
        <button className="center" onClick={this.onClickupdate}>
          Click here to go update employee details
        </button>
        <br />
         <button className="center" onClick={this.onClicklogout}> 
          Click here to go Logout page
        </button>
        <br />
        */}

      </div>
    );
  }
}

export default withRouter(Home);
