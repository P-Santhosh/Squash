import React, { Component } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
} from "react-router-dom";



class Pageone extends Component {

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
                <div className="header">
                    <div className="flex py-5">
                        <div className="w-2/6 text1 text-right" onClick={this.onClick} ><p><span className="color1 px-2 py-1 rounded-full mr-3">1</span>Personal Details</p></div>
                        <div className="w-2/6 text2 text-center" onClick={this.onClick2}><p><span className="color2 px-2 py-1 rounded-full mr-3">2</span>Company Details</p></div>
                        <div className="w-2/6 text2" onClick={this.onClick3}> <p><span className="color2 px-2 py-1 rounded-full mr-3">3</span>Email Verification</p></div>
                    </div>
                </div>
                <div className=" bg-gray-50 flex flex-col justify-center items-center">
                    <div className="text-center">
                        <p className="bodys_h1 pt-9">Add your personal details  </p>
                        <p className="bodys_h3 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="">
                    <div className=" card mt-6 p-6 space-y-4">
                        <label>Full Name</label><br/>
                        <input type="text" className="border w-full p-1 mt-2" placeholder="&nbsp;&nbsp;Mason Rice"></input>
                        <label >Gender</label><br/>
                        <button className="mt-2 px-7 py-2 bg-gray-50 hover:bg-red-200 hover:text-red-600 rounded mr-3">Male </button>
                        <button  className="mt-2 px-7 py-2 bg-gray-50 hover:bg-red-200 hover:text-red-600 rounded mr-3">Female </button>
                        <button  className="mt-2 px-7 py-2 bg-gray-50 hover:bg-red-200 hover:text-red-600 rounded mr-3">Other </button><br/>
                        <label>Country</label><br/> 
                        <select name="country" placeholder="India" className="border w-full p-2 mt-2">
                            <option value="State 1">India</option>
                            <option value="State 2">US</option>
                            <option value="State 3">USA</option>
                            <option value="State 4">England</option>
                        </select>
                        <label className="mt-5">State</label><br/> 
                        <select name="state" placeholder="Tamil Nadu" className="border w-full p-2 mt-2">
                            <option value="State 1">Tamil Nadu</option>
                            <option value="State 2">State 2</option>
                            <option value="State 3">State 3</option>
                            <option value="State 4">State 4</option>
                            <option value="State 5">State 5</option>
                            <option value="State 6">State 6</option>
                        </select>
                        <label className="pt-10">Phone</label><br/>
                        <input type="text" className="border w-full p-1 mt-2" placeholder="&nbsp;&nbsp;9876543210"></input>
                        <button className="btn w-full p-1 mt-12">Next</button>
                     
                    </div>
                    <p className="text-center pt-3 label ">Already have an account? <span className="login">Log in</span></p>
                    </div>

                </div>
            </>
        );
    }
}
export default withRouter(Pageone);
