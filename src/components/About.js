import React  from "react";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(props)
    {
        super(props)
    }
    componentDidMount(){
        console.log("Parent component didmount")
    }
    render(){
        return(
            <div className="About">
            <h1>This is a Food delivery app</h1>
            <UserClass name={"Theertha"} location={"Iritty"}/>
            </div>
        );
    }
}


export default About;