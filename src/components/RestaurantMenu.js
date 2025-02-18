import React from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";



const RestaurantMenu =()=>{

const {resId}=useParams();
const resInfo=useRestaurantMenu(resId);

if(resInfo === null)
{return <Shimmer/>;
}

const {name,cuisines,costForTwoMessage} =resInfo?.cards[2]?.card?.card?.info;
console.log(resInfo);
let recommendedMenuresInfocards=[];
let filteredCards =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
filteredCards.forEach(function(item){
   if( item.card&&item.card.card&&item.card.card&&item.card.card.title==="Recommended")
   {
    recommendedMenuresInfocards.push(item);
   }
});
console.log(recommendedMenuresInfocards);
const itemCards=recommendedMenuresInfocards[0].card.card.itemCards;


    

    return (
        <div className="restMenu">
        <h1>{name}</h1>
        <p>{cuisines.join(",")} - {costForTwoMessage}</p>
       
        <h2>Menu</h2>
        <ul>
        {itemCards.map((item)=>(
            <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100||item.card.info.defaultPrice/100}</li>
        ))}
        </ul>

        </div>
    );
};


export default RestaurantMenu;