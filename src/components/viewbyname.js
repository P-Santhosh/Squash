import React, { Component, useState } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      sortbyname: "",
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
    console.log(this.state.sortbyname,"sdfghjk");
    if(this.state.sortbyname.length === 0)
    {
      fetch(
        "http://127.0.0.1:8000/authen_module/view-employees" 
          
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
    }
    else
    {
      fetch(
        "http://127.0.0.1:8000/authen_module/viewbyname-employees?name=" +
          this.state.sortbyname
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
    }
   
      
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p></p>
          <b className="mhead">Meetups</b>
          <p></p>
          <p></p>

          <br />
          <label className="sort">
            Enter meetups Name
            <input
              type="text"
              value={this.state.sortbyname}
              onChange={this.handleChange}
              name="sortbyname"
              className="sortt"
            />
          </label>
          <p></p>
          <br />
          <button>Submit</button>
        </form>
        {this.state.items && this.state.items.length > 0 ? (
          this.state.items.map((item) => (
            <ol className="ans" key={item.email}>
              <b> Meetup Name:</b>
              {item.name} <br />
              <b> Meetup Organisation:</b>
              {item.org} <br />
              <b> Meetup Email.Id:</b>
              {item.email} <br />
              <b> Meetup Date:</b>
              {item.date} <br />
              {console.log(this.state)}
            </ol>
          ))
        ) : (
          <p className="record">No records Found</p>
        )}
      </div>
    );
  }
}
export default App;
