import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";



class Pagethree extends Component {
  onClick = (event) => {
    this.props.history.push("/");
  };
  onClick2 = (event) => {
    this.props.history.push("./company_details");
  };
  onClick3 = (event) => {
    this.props.history.push("./email_verification");
  };

  render() {
    return (
      <>
        <div className="header ">
          <div className="flex py-5">
            <div className="w-2/6 text2 text-right" onClick={this.onClick}><p><span className="color2 px-2 py-1 rounded-full mr-3 text-white">✔</span>Personal Details</p></div>
            <div className="w-2/6 text2 text-center" onClick={this.onClick2}><p><span className="color2 px-2 py-1 rounded-full mr-3 text-white">✔</span>Company Details</p></div>
            <div className="w-2/6 text1" onClick={this.onClick3}> <p><span className="color1 px-2 py-1 rounded-full mr-3">3</span>Email Verification</p></div>
          </div>
        </div>
        <div className=" bg-gray-50 flex flex-col justify-center items-center">
          <div className="text-center">
            <p className="bodys_h1 mt-9">Enter your OTP </p>
            <p className="bodys_h3 mt-3">For your security, we need to verify your identity. We sent a 5-digit </p>
            <p className="bodys_h3 mt-1">code to <b>name@domain.com</b>. Please enter it below.</p>
          </div>
          <div className="">
            <div className=" card3 mt-6 p-6">
              <p className="third_color">Enter your code</p>
              <div className="py-5">
              <input type="text" className="border w-14  px-2 py-4 mt-2 mr-10"></input>
              <input type="text" className="border w-14  px-2 py-4 mt-2 mr-10"></input>
              <input type="text" className="border w-14  px-2 py-4 mt-2 mr-10"></input>
              <input type="text" className="border w-14  px-2 py-4 mt-2 mr-10"></input>
              <input type="text" className="border w-14  px-2 py-4 mt-2 "></input>
              </div>

              <div className="flex">
                <div className="w-3/12 btn_back py-2 "><button>Back</button></div>
                <div className="w-9/12 btn_otp py-2 ml-4"><button>Verify</button></div>


              </div>
              <hr className="my-5"></hr>
              <p className="text-center px-5">Didn’t receive the email?  Check your spam filter for an email
                from <span className="login">name@domain.com</span></p>
            </div>

          </div>

        </div>

      </>
    );
  }
}
export default withRouter(Pagethree);
