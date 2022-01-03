/*import React, { Component } from "react";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

class Crud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "My React Form",
      employeeData: [],
      act: 0,
      index: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let employeeData = this.state.employeeData;
    let name = this.refs.textName.value;
    let age = this.refs.textAge.value;
    if (this.state.act === 0) {
      let newEmployee = {
        name: name,
        age: age,
      };
      employeeData.push(newEmployee);
    } else {
      let index = this.state.index;
      employeeData[index].name = name;
      employeeData[index].age = age;
    }

    this.setState({
      employeeData: employeeData,
      act: 0,
    });
    this.refs.myForm.reset();
  };
  handleEdit = (i) => {
    let employeeData = this.state.employeeData[i];
    this.refs.textName.value = employeeData.name;
    this.refs.textAge.value = employeeData.age;
    this.setState({
      employeeData: employeeData,
    });
  };
  handleDelete = (i) => {
    let employeeData = this.state.employeeData;
    employeeData.splice(i, 1);
    this.setState({
      employeeData: employeeData,
      act: 1,
      index: i,
    });
  };

  render() {
    let employeeData = this.state.employeeData;
    return (
      <>
        <div>
          <h1>My React Form</h1>
          <from ref="myForm">
            <label>Name</label>
            <input type="text" ref="textName" placeholder="Enter Name" />
            <label>Age</label>
            <input type="text" ref="textAge" placeholder="Enter Age" />
            <button onClick={(event) => this.handleSubmit(event)}>Save</button>
          </from>
          <table>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
            {employeeData.map((data, i) => (
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>
                  <button onClick={this.handleEdit(i)}>Edit</button>{" "}
                </td>
                <td>
                  <button onClick={this.handleDelete(i)}>Delete</button>{" "}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </>
    );
  }
}

export default Crud;*/
