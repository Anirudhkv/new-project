import React from "react";
import RestCards from "./RestCards";
import restObj from "../utils/mockedData";
import { useState } from "react";





const Body =()=>
{
const [restData,setrestData]=useState(restObj);
  return(
    <div className="body">
      <div className="filter">
      <button className="filter-btn" onClick={()=>{
        const filterRest =restData.filter((res)=>res.info.avgRating>4);
        setrestData(filterRest);
      }}>Top Rated Restaurants</button>
      </div>
      <div className="rest-cards">
        {
          restData.map((resturant)=>(<RestCards key={resturant.info.id} resData={resturant}/>))
        }
          
           
      </div>

    </div>
  )
}
export default Body;