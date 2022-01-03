import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";


class Pagetwo extends Component {
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
            <div className="w-2/6 text1 text-center" onClick={this.onClick2}><p><span className="color1 px-2 py-1 rounded-full mr-3">2</span>Company Details</p></div>
            <div className="w-2/6 text2" onClick={this.onClick}> <p><span className="color2 px-2 py-1 rounded-full mr-3">3</span>Email Verification</p></div>
          </div>
        </div>
        <div className=" bg-gray-50 flex flex-col justify-center items-center">
          <div className="text-center">
            <p className="bodys_h1 mt-9">Add your company details  </p>
            <p className="bodys_h3 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="">
            <div className=" card mt-6 p-6 space-y-4">
              <div className="flex pb-5">
                <div className="w-3/12"><svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#F8F9FA" stroke="#2E4B64" stroke-opacity="0.1" stroke-dasharray="3 3" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M51.8884 32.2065C54.2533 32.3304 56.2716 30.5131 56.3955 28.1478C56.5195 25.7824 54.7022 23.7646 52.3374 23.6407C49.972 23.5167 47.9542 25.3335 47.8303 27.6989C47.7063 30.0642 49.5231 32.0825 51.8884 32.2065ZM56.9584 55.0236L20.9366 54.8023C19.9556 54.7965 19.1854 53.9601 19.2607 52.9822L20.0649 42.4926C20.0938 42.1181 20.2462 41.7644 20.4977 41.4863L31.0186 29.8716C31.7155 29.1023 32.9345 29.1364 33.5873 29.9436L44.1973 43.0643C44.7884 43.7955 45.8629 43.9041 46.5883 43.306L51.8218 38.9915C52.5605 38.3829 53.6573 38.5081 54.2397 39.2675L58.69 45.0729C58.9349 45.3919 59.0577 45.7882 59.0367 46.1898L58.6577 53.4209C58.6104 54.3233 57.8619 55.0294 56.9584 55.0236Z" fill="#E3E9ED" />
                </svg>
                </div>
                <div className="w-9/12 mt-5 login">Upload your company logo</div>
              </div>
              <label>Company Name</label><br />
              <input type="text" className="border w-full p-1 mt-2" placeholder="&nbsp;&nbsp;Squash Apps Private Ltd."></input>
              <label>Full Name</label><br />
              <input type="text" className="border w-full p-1 mt-2" placeholder="&nbsp;&nbsp;rice.mason13@cyces.com"></input>
              <label>Job Title</label><br />
              <input type="text" className="border w-full p-1 mt-2" placeholder="&nbsp;&nbsp;User Experience Designer"></input>
              <label>Years of Experience</label><br />
              <input type="number" className="border w-full p-1 mt-2" ></input>
              <p><span><input className="w-5 h-5 mr-5 " type="checkbox"></input></span>I accept the <span className="login">Terms and Conditions</span></p>
              <div className="flex">
                <div className="w-3/12 btn_back py-2 "><button>Back</button></div>
                <div className="w-9/12 btn_otp py-2 ml-4"><button>Send OTP</button></div>
              </div>

            </div>

          </div>

        </div>

      </>
    );
  }
}
export default withRouter(Pagetwo);
