import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import Header from "./Header";

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id: "",
    };
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
    event.preventDefault();
    alert("Employee Deleted Successfully");
    fetch(
      "http://127.0.0.1:8000/authen_module/delete-employee?employee_id=" + this.state.id
    );
  };
  onClick = (event) => {
    this.props.history.push("./home");
  };
  onClickall = (event) => {
    this.props.history.push("./view");
  };

  render() {
    return (
      <div >
        <Header></Header>
        <h1 className="text-center font-bold text-3xl pt-10 pb-6">Employee delete page</h1>
        <hr className="border-2 "></hr>
        <div className="pt-10">
        <form onSubmit={this.handleSubmit}>
          <label className="delete">
            Enter id to delete
            <input
              type="text"
              value={this.state.id}
              onChange={this.handleChange}
              name="id"
              className="deletev border border-black"
            />
          </label>
          <p></p>
          <br />
          <button className="center"> Delete the employee</button>
        </form>
        <p></p>
        </div>
      </div>
    );
  }
}
export default withRouter(Delete);
/*onClickdelete = (item) => {
  <div>
  <p>Click Yes to delete employee</p>
  <button onClick={this.onClickyes}>Yes</button>
  <button onClick={this.onClickno}>No</button>
  </div>
  
};
onClickyes = (event) => {
  alert("Employee Deleted Successfully");
};
onClickno = (event) => {
  alert("Employee is not  Deleted ");
};*/
