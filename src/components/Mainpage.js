import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import Header from "./Header";


class Mainpage extends Component {
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
      this.props.history.push("./home");
    });
  };
  onClick = (event) => {
    this.props.history.push("./home");
  };

  render() {
    return (
      <div>
         <header className="bg-gray-200 flex px-72 ">
           <div>
            <img
          src={
            "/img/logos.png"
          }
          className=" py-2"
          alt="Logo"
        />
      </div>
            <div className="px-20 pt-6">
               <h1 className="font-bold text-5xl">Karur Gold Finance</h1>
            </div>
           
           
        </header>
        <div className="pt-12 text-center">
        <form onSubmit={this.handleSubmit}>
          <p></p>
          <b className="font-semibold text-3xl   ">Login Page</b>
          <p></p>
          <p></p>
          <p></p>
          <hr></hr>
          <p></p>
          <br />
          <div className="py-12">
          <label className="text-xl ">
            Email Id
            <input
              type="email"
              value={this.state.sortbyemail}
              onChange={this.handleChange}
              name="sortbyemail"
              className="rounded border bg-blue-100 hover:border-blue-600 pl-5 ml-16"
            />
          </label>
          <p></p>
          <br />
          <label className="text-xl">
            Password
            <input
              type="password"
              value={this.state.sortbypassw}
              onChange={this.handleChange}
              name="sortbypassw"
              className="rounded border bg-blue-100 hover:border-blue-600 pl-5 ml-12"
            />
          </label>
          <p></p>
          <br />
          </div>
          <button className="px-12 text-lg  bg-yellow-300 text-black border-yellow-600">Log In</button>
          <p></p>
          
        </form>
        </div>
      </div>
    );
  }
}
export default withRouter(Mainpage);
