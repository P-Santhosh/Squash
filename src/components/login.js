import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import Header from "./Header";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      sortbyemail: "",
      sortbypassw: "",
    };
  }

  async postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: data, // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(value, "name ", name);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    const { sortbyemail, sortbypassw } = this.state;
    const data = {
      email: sortbyemail,
      password: sortbypassw,
    };
    event.preventDefault();
    this.postData(
      "http://127.0.0.1:8000/authen_module/login-employee",
      JSON.stringify(data)
    ).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
      let requireddata = JSON.stringify(data);
      localStorage.setItem("user", requireddata);
      console.log(requireddata);
      this.props.history.push("./details");
    });
  };
  onClick = (event) => {
    this.props.history.push("./home");
  };

  render() {
    return (
      <div>
         <header className="bg-gray-200 flex px-56">
           <div>
            <img
          src={
            "/img/logo.png"
          }
          className="w-32"
          alt="Logo"
        />
      </div>
            <div>
               <h1>Karur Gold Finance</h1>
            </div>
           
           
        </header>
        
        <form onSubmit={this.handleSubmit}>
          <p></p>
          <b className="mhead">Login Page</b>
          <p></p>
          <p></p>
          <p></p>
          <hr></hr>
          <p></p>
          <br />
          <label className="sort">
            Email Id
            <input
              type="email"
              value={this.state.sortbyemail}
              onChange={this.handleChange}
              name="sortbyemail"
              className="temail border border-black"
            />
          </label>
          <p></p>
          <br />
          <label className="sort">
            Password
            <input
              type="password"
              value={this.state.sortbypassw}
              onChange={this.handleChange}
              name="sortbypassw"
              className="passw border border-black"
            />
          </label>
          <p></p>
          <br />
          <button className="center">Log In</button>
          <p></p>
          
        </form>
      </div>
    );
  }
}
export default withRouter(Login);
