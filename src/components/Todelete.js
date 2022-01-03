import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import Header from "./Header";
import View from "./View";
class Todelete extends Component {
  constructor(props) {
    super(props);
    const userid = localStorage.getItem("id");
    this.state = {
      ids: userid,
      id: userid
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
  
  onClickyes = (event) => {
    alert("Employee Deleted Successfully");
    console.log(this.state.ids)
    fetch(
      "http://127.0.0.1:8000/authen_module/delete-employee?employee_id=" + this.state.ids
    );
    this.props.history.push("./view");
  };
  onClickno = (event) => {
    this.props.history.push("./view");
  };
  
  render() {
    return (
      <div className="deletetop">
        <Header></Header>
        <h1 className="details">Confirm About urs status for delete</h1>
        <p></p>
        <hr></hr>
        <button onClick={this.onClickyes} className="todo">Yes, delete the details</button>
        <button onClick={this.onClickno} className="todo1">No, back to details</button>
        <label className="delete">
            
            <input
              type="hidden"
              value={this.state.ids}
              onChange={this.handleChange}
              name="ids"
              
            />
          </label>
     
        
        
      </div>
    );
  }
}
export default withRouter(Todelete);