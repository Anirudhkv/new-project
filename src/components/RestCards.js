import React from "react";
import Logo from "../images/logo.png";
import { CDN_URL } from "../utils/constants";
const RestCards =(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,locality,cuisines,costForTwo,avgRating}=resData?.info;
    return(
      <div className="rounded overflow-hidden shadow-lg m-4 p-4">
        <div className="w-[300] h-[350]">
          <img alt={Logo} className="w-[300] h-[300] rounded-lg" src={CDN_URL+cloudinaryImageId}/>
        </div>
  <h3 className="font-bold pb-2">{name}</h3>
  <h5>{locality}</h5>
  <h5>{cuisines.join(",")}</h5>
  <h5>{costForTwo}</h5>
  <h5>{"⭐"+avgRating+" stars"}</h5>
  
      </div>
    )
  }
  export const withPromotedLabel=(RestCards)=>
{
    return(props)=>
    {
        return(
          <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
            <RestCards {...props}/>
            </div>
        )
    };
};

  export default RestCards;