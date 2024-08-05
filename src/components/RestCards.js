import React from "react";
import Logo from "../images/logo.png";
import { CDN_URL } from "../utils/constants";
const RestCards =(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,locality,cuisines,costForTwo,avgRating}=resData?.info;
    return(
      <div className="card-container">
        <div className="resImage">
          <img alt={Logo} className="res-img" src={CDN_URL+cloudinaryImageId}/>
        </div>
  <h3>{name}</h3>
  <h5>{locality}</h5>
  <h5>{cuisines.join(",")}</h5>
  <h5>{costForTwo}</h5>
  <h5>{avgRating+" stars"}</h5>
  
      </div>
    )
  }
  export default RestCards;