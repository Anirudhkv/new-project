import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

const Grocery=lazy(()=>import("./components/Grocery"));
const AppLayout =()=>
{
  return(
  <div className="main-container">
<Header/>
<Outlet/>
  </div>)
}
const AppRouter=createBrowserRouter([
{
  path:"/",
  element:<AppLayout/>,
  children:[
    {
      path:"/",
      element:<Body/>
    
    },
    {
      path:"/About",
      element:<About/>
    
    },
    {
      path:"/Contact",
      element:<Contact/>
    
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    
    },
    {
      path:"/Grocery",
      element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
    
    }
  ],
  errorElement:<Error/>
}



]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);
