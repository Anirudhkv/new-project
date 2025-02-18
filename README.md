#Readme file
Theertha@99
#parcel
--set up dev build
--local server
--HMR --hot module replacement
--uses file watching algo
--caching--faster build
--image optimization
--bundler
--consistent hashing
--tree shaking
--https

--Virtual DOM is actually an object representation of jsx or actual DOM
React Hooks
--------------
 JS functions with superpowers
 Two common hooks
  useState() --create a state variable --- named import import {useState} from "react"
   --useState is used to create local state variable inside our functional components
   const [list,setList]=useState(defaultList);
   --whenever a state variable update react rerenders the component


 React uses Reconciliation alg(React Fiber)
   -virtual DOM is actually a virtual representation of actual DOM

 Diff Alg
   --Finds the difference btwn updated DOM and previous state of DOM and update the actual DOM

  --React is fast because of faster DOM manipulation
    --it uses virtual DOM for DOM manipulation


  userEffect()
  -----------------
  --useEffect will be called only after the component is initially rendered
  -- useEffect(()=>{},[]) -->useEffect(callBackFunction(),dependencyArray)
  --dependency array is optional 
    --if there is no dependency array the useEffect will be called everytime the particular component rerenders
    --if we give as an empty array only on component load
    --We can specify a dependency inside the dependency array which can be a state variable so that everytime
       the state variable updates or re rendering happens useEffect will be called.


  Optional chaining
---rafce + Enter to create a boiler plate

--React is a single page application

Routing in web apps
 -- Client Side Routing
   --we switch between the components
 -- Server side routing
   -- we make a network call to the server fetch the page and reload the accessed page

React class based components life cycle
 -- Case in which a child class component is called inside a parent class component
 -- when we call a child class component an instance of the child component will be created
 -- Order
    --Parent constructor
    --Parent render
    -- Child constructor
    --  Child render
    -- child componentDidMount
    -- Parent componentDidMount
 ------
-- We render the component first and then map the data from the api    
component life cycle consist of
  --render phase(constructor,render)
  DOM UPDATE
  -- commit phase(componentDidMount)
  
  if there are multiple instances of child class react will batch the render and commit phase of the children

  Higher order components
   --Higher order components take a js function that takes in a component as input and return an enhanced version of the component
   




	VA0288093141
  https://www.utiitsl.com/