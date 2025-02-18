import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={userInfo:{
            name:"Ani"
        }}
    }
    async componentDidMount(){
      const data=await fetch("https://api.github.com/users/Anirudhkv"),
      json=await data.json();
      console.log(json);
      this.setState({
        userInfo:json
      })
    }

    componentDidUpdate(){
        console.log("component update");
    }
    
    componentWillUnmount(){
        console.log("unmount");
    }
    render(){
        const{login,avatar_url}=this.state.userInfo
        return(
            <div className="user-class">
        <img src={avatar_url}></img>
        <h1>Name: {login}</h1>
        <h1>Location:India</h1>

        </div>
        )
    }
}
export default UserClass;