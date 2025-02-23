import { useEffect,useState } from "react";
import { MENU_URL } from "./constants";
const useRestaurantMenu =(resId)=>{
    
    const [resInfo,setresInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);
    
    
    
    const fetchMenu = async()=>{
    
        const data= await fetch(MENU_URL+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json =await data.json();
    
        setresInfo(json.data);
    
    }


return resInfo;

}
export default useRestaurantMenu;