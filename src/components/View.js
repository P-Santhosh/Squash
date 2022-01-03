import React, { Component, useState } from "react";
import { confirm } from "react-confirm-alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import Delete from "./Delete";
import Header from "./Header";

class View extends Component {
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

  componentDidMount() {
    this.a();
  }
  a = () => {
    console.log("hello");
    fetch("http://127.0.0.1:8000/authen_module/view-employee")
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

  onClick = (event) => {
    this.props.history.push("./home");
  };
  onClickadd = (event) => {
    let txt;
    let r = window.confirm("Click Ok to Add a new the employee details");
    if (r == true) {
      
      
      this.a();
      this.props.history.push("./create");
    } else {
      txt = "You pressed Cancel!";
    }
  };
  onClickedit = (event) => {
    //this.props.history.push("./update");
    let txt;
    let r = window.confirm("Click OK to Edit  the employee details");
    if (r == true) {
      window.location.reload();

      this.a();
    } else {
      txt = "You pressed Cancel!";
    }
  };
  onClickdelete = (item) => {
    let txt;
    let r = window.confirm("Click OK to Delete the employee details");
    if (r == true) {
      window.location.reload();
      fetch(
        "http://127.0.0.1:8000/authen_module/delete-employee?employee_id=" +
          item
      );
      this.a();
      //this.props.history.push("./view");
    } else {
      txt = "You pressed Cancel!";
    }
    /*fetch(
      "http://127.0.0.1:8000/authen_module/delete-employee?employee_id=" + item
    );
   */
    //this.props.history.push("./todelete",(item));
    //localStorage.setItem("id", item);
  };

  render() {
    return (
      <div>
        <Header></Header>
        <button className="added" onClick={this.onClickadd}>Add New</button>
        <table className="tableh toop ">
          <tr>
            <td>
              <b>Id.no</b>
            </td>
            <td>
              <b>Name</b>
            </td>
            <td>
              <b> E-mail Address</b>
            </td>
            <td>
              <b>Edit</b>
            </td>
            <td>
              <b>Delete</b>
            </td>
          </tr>
        </table>
        {this.state.items && this.state.items.length > 0 ? (
          this.state.items.map((item) => (
            <ol key={item.employee_id}>
              <table className="views">
                <tr>
                  <td>{item.employee_id}</td>
                  <td>{item.employee_name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={this.onClickedit}>Edit</button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        {
                          this.onClickdelete(item.employee_id);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </table>
            </ol>
          ))
        ) : (
          <p></p>
        )}
      </div>
    );
  }
}
export default withRouter(View);
