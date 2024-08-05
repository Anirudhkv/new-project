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

React Hooks
--------------
 JS functions with superpowers
 Two common hooks
  useState() --create a state variable --- named import import {useState} from "react"
   const [list,setList]=useState(defaultList);
   --whenever a state variable update react rerenders the component


 React uses Reconciliation alg(React Fiber)
   -virtual DOM is actually a virtual representation of actual DOM

 Diff Alg
   --Finds the difference btwn updated DOM and previous state of DOM and update the actual DOM

  --React is fast because of faster DOM manipulation
    --it uses virtual DOM for DOM manipulation
         

  userEffect()