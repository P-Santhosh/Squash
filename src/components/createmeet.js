import React from "react";
//import { render } from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meetname: "",
      meetdesc: "",
      meetorg:"",
      meetcontact: "",
      meetdate: "",
      meetaddress: "",
      meetemail: "",
      meetfile:"",
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
    const {meetname, meetaddress, meetcontact, meetdate,meetemail,meetdesc, meetorg,meetfile} = this.state;
    const data = {
      name: meetname,
      date: meetdate,
      desc: meetdesc,
      address:meetaddress,
      contact_no:meetcontact,
      email : meetemail,
      org : meetorg,
      created_by : meetname,
      updated_by :meetname,
      file: meetfile,
      
    }
    event.preventDefault();
    this.postData("http://127.0.0.1:8000/authen_module/create-employee",  JSON.stringify(data)).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
  };
  

  render() {
    return (
      <div className="form">
        <h3 className="mform">Meetup Form</h3>
        <p>________________________________</p>
        <p></p>
        <p></p>
        <form onSubmit={this.handleSubmit}>
          {console.log(this.state)}
          <label>
          Meetup Name
            <input
              type="text"
              value={this.state.meetname}
              onChange={this.handleChange}
              name="meetname"
              className="name"
            />
          </label>
          <p></p>
          <br />
          <label>
            Meetup Dec
            <input
              type="text"
              value={this.state.meetdesc}
              onChange={this.handleChange}
              name="meetdesc"
              className="desc"
            />
          </label>
          <p></p>
          <br />
          <label>
          Meetup Organisation
            <input
              type="text"
              value={this.state.meetorg}
              onChange={this.handleChange}
              name="meetorg"
              className="org"
            />
          </label>
          <p></p>
          <br />
          <label>
          Meetup Contact.No
            <input
              type="text"
              value={this.state.meetcontact}
              onChange={this.handleChange}
              name="meetcontact"
              className="con"
            />
          </label>
          <p></p>
          <br />
          <label>
          Meetup Email
            <input
              type="mail"
              value={this.state.meetemail}
              onChange={this.handleChange}
              name="meetemail"
              className="email"
            />
          </label>
          <p></p>
          <br />
          <label>
          Meetup Date
            <input
              type="date"
              value={this.state.meetdate}
              onChange={this.handleChange}
              name="meetdate"
              className="box8"
            />
          </label>
          <p></p>
          <br />
          <label>
          Meetup Address
            <textarea name="story"
              rows="5" cols="33"
              value={this.state.meetaddress}
              onChange={this.handleChange}
              name="meetaddress"
              className="add"
            />
          </label>
          <p></p>
          <br />
          <label>
          Meetup File
            <input
              type="file"
              value={this.state.meetfile}
              onChange={this.handleChange}
              name="meetfile"
              className="boxx"
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

export default App;
