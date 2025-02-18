import React from "react";
import RestCards,{withPromotedLabel} from "./RestCards";
import Shimmer from "./Shimmer";
import restObj from "../utils/mockedData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

 





const Body =()=>
{
const [restData,setrestData]=useState([]);
const [filteredRestData,setfilteredRestData]=useState([]);
const [searchText,setsearchText]=useState("");
const PromotedCard=withPromotedLabel(RestCards);

useEffect(()=>{

    fetchData();
    
     },[]);
    
     const fetchData=async()=>{
      
        const data= await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        const json=await data.json();
        setrestData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json);   
    
    
    
    
     };
   
    const onlineStatus=useOnlineStatus();
    if(!onlineStatus)
    {
      return(
        <h1>Oops!Please check your internet connection</h1>
      )
    } 
     
  return restData.length===0?<Shimmer/>:(
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" type="text" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}></input>
          <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 ml-6" onClick={()=>{
            const filterRestName =restData.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setfilteredRestData(filterRestName);
           
            
          }}>Search</button>
        </div>
        <div className="my-4 mx-1 py-4">   
      <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-2" onClick={()=>{
        const filterRest =restData.filter((res)=>res.info.avgRating>4.6);
        setfilteredRestData(filterRest);
      }}>Top Rated Restaurants</button>
      </div>
      </div>
      <div className="flex flex-wrap">
        {
          filteredRestData.map((resturant)=>(<Link key={resturant.info.id} to={"/restaurants/"+resturant.info.id} style={{ textDecoration: 'none',color: "inherit" }}>
           {resturant.info.avgRating>4.6?<PromotedCard resData={resturant}/>: <RestCards  resData={resturant}/>}
            </Link>))
        }
          
           
      </div>

    </div>
  )
}
export default Body;