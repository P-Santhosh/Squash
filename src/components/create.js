/*import React from "react";
//import { render } from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empname: "",
      empdob: "",
      empage:"",
      empemail: "",
      emppassw: "",
      empaddress: "",
      empcontact: "",
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
    console.log("A form was submitted: " + JSON.stringify(this.state));
    const {empname, empaddress, empcontact, empdob,empage, empemail,emppassw} = this.state;
    const data = {
      employee_name: empname,
      dob: empdob,
      age: empage,
      address:empaddress,
      contact_no:empcontact,
      email : empemail,
      password : emppassw,
      created_by : empname,
      updated_by :empname,
    }
    event.preventDefault();
    this.postData("http://127.0.0.1:8000/authen_module/create-employee",  JSON.stringify(data)).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
  };
  

  render() {
    return (
      <div className="form">
        <h3 className="hform">Application Form</h3>
        <p></p>
        <form onSubmit={this.handleSubmit}>
          {console.log(this.state)}
          <label>
            Name
            <input
              type="text"
              value={this.state.empname}
              onChange={this.handleChange}
              name="empname"
              className="box1"
            />
          </label>
          <p></p>
          <br />
          <label>
            Date of Birth
            <input
              type="date"
              value={this.state.empdob}
              onChange={this.handleChange}
              name="empdob"
              className="box2"
            />
          </label>
          <p></p>
          <br />
          <label>
            Age
            <input
              type="number"
              value={this.state.empage}
              onChange={this.handleChange}
              name="empage"
              className="box7"
            />
          </label>
          <p></p>
          <br />
          <label>
            E-mail id
            <input
              type="email"
              value={this.state.empemail}
              onChange={this.handleChange}
              name="empemail"
              className="box3"
            />
          </label>
          <p></p>
          <br />
          <label>
            Create Password
            <input
              type="password"
              value={this.state.emppassw}
              onChange={this.handleChange}
              name="emppassw"
              className="box6"
            />
          </label>
          <p></p>
          <br />
          <label>
            Address
            <input
              type="text"
              value={this.state.empaddress}
              onChange={this.handleChange}
              name="empaddress"
              className="box4"
            />
          </label>
          <p></p>
          <br />
          <label>
            Contact.No
            <input
              type="text"
              value={this.state.empcontact}
              onChange={this.handleChange}
              name="empcontact"
              className="box5"
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

//render(<NameForm />, document.getElementById("root"));

export default App;*/

import React from "react";
//import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import Header from "./Header";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empname: "",
      empdob: "",
      empage: "",
      empemail: "",
      emppassw: "",
      empaddress: "",
      empcontact: "",
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
    console.log("A form was submitted: " + JSON.stringify(this.state));
    const {
      empname,
      empaddress,
      empcontact,
      empdob,
      empage,
      empemail,
      emppassw,
    } = this.state;
    const data = {
      employee_name: empname,
      dob: empdob,
      age: empage,
      address: empaddress,
      contact_no: empcontact,
      email: empemail,
      password: emppassw,
      created_by: empname,
      updated_by: empname,
    };
    event.preventDefault();
    this.postData(
      "http://127.0.0.1:8000/authen_module/create-employee",
      JSON.stringify(data)
    ).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
    this.props.history.push("./login");
  };
  onClick = (event) => {
    this.props.history.push("./home");
  };

  render() {
    return (
      <div>
        <Header></Header>
        <h1 className="text-center font-bold text-3xl pt-10 pb-6">Application Form</h1>
        <hr className="border-2 "></hr>
        <div className="pt-10">
        <form onSubmit={this.handleSubmit}>
          {console.log(this.state)}
          <label className="form">
            Name
            <input
              type="text"
              value={this.state.empname}
              onChange={this.handleChange}
              name="empname"
              className="box1 border border-black px-2"
            />
          </label>
          <p></p>
          <br />

          <label className="form">
            Date of Birth
            <input
              type="date"
              value={this.state.empdob}
              onChange={this.handleChange}
              name="empdob"
              className="box2 border border-black px-11"
            />
          </label>
          <p></p>
          <br />
          <label className="form">
            Age
            <input
              type="number"
              value={this.state.empage}
              onChange={this.handleChange}
              name="empage"
              className="box7 border border-black px-2"
            />
          </label>
          <p></p>
          <br />
          <label className="form">
            E-mail id
            <input
              type="email"
              value={this.state.empemail}
              onChange={this.handleChange}
              name="empemail"
              className="box3 border border-black px-2"
            />
          </label>
          <p></p>
          <br />
          <label className="form">
            Create Password
            <input
              type="password"
              value={this.state.emppassw}
              onChange={this.handleChange}
              name="emppassw"
              className="box6 border border-black px-2"
            />
          </label>
          <p></p>
          <br />
          <label className="form">
            Address
            <input
              type="text"
              value={this.state.empaddress}
              onChange={this.handleChange}
              name="empaddress"
              className="box4 border border-black px-2"
            />
          </label>
          <p></p>
          <br />
          <label className="form">
            Contact.No
            <input
              type="text"
              value={this.state.empcontact}
              onChange={this.handleChange}
              name="empcontact"
              className="box5 border border-black px-2"
            />
          </label>
          <p></p>
          <br />
          <div className="text-center">
          <button className="px-12 text-lg bold bg-yellow-300 text-black border-yellow-600 items-center">Submit</button></div>
          <p></p>
        </form>
        </div>
      </div>
    );
  }
}

//render(<NameForm />, document.getElementById("root"));

export default withRouter(Create);
