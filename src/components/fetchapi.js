import React, { Component, useState } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/users ")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
        });
      });
  }
  render() {
    let { items } = this.state;

    return (
      <div className="details">
        {items.map((item) => (
          <ol key={item.id}>
            {" "}
            {item.id})<b> Employee Name:</b>
            {item.login} <br />
            <img src={item.avatar_url} alt="item.Login"></img>
          </ol>
        ))}
      </div>
    );
  }
}
/*class App extends Component {
  render() {
    return (
      <div className="App">
      <p>hello</p>
      <video width="100%" height="600" controls autoPlay muted loop>
      <source src="/img/test.mp4" type="video/mp4"/>
     </video>
      </div>
    );
  }   
}*/
export default App;
