import React, { Component, useState } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      sortbyage: "",
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
    console.log(this.state.sortbyage);
    fetch(
      "http://127.0.0.1:8000/authen_module/viewage-employees?age=" +
        this.state.sortbyage
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.status === true) {
          this.setState({
            items: json.data,
          });
        } else {
          this.setState({
            items: ["no"],
          });
        }
      });
  };

  render() {
    return (
      <div className="details">
        {this.state.items && this.state.items.length > 0 ? (
          this.state.items.map((item) => (
            <ol key={item.employee_id}>
              <b> Employee Name:</b>
              {item.employee_name} <br />
              <b> Employee DOB:</b>
              {item.dob} <br />
              {console.log(this.state)}
            </ol>
          ))
        ) : (
          <p>No records Found</p>
        )}
        <form onSubmit={this.handleSubmit}>
          <label>
            Give the age to Shortlist employee by age
            <input
              type="number"
              value={this.state.empcontact}
              onChange={this.handleChange}
              name="sortbyage"
            />
          </label>
          <p></p>
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default App;
