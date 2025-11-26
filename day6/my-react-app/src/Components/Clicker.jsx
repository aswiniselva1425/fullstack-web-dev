// import { useEffect } from "react";

// function Clicker() {
//    const handleClick = () => {
//      alert("You clicked me!");
//    };
   
 
// useEffect(() => {
//    console.log("Component mounted or updated");
//  });
 
// useEffect(() => {
//    console.log("Only on first load");
//  }, []);
 
//    return <button onClick={handleClick}>Click Me</button>;
// }

// export default Clicker 

import {useState, useEffect } from "react";

function Clicker() {
  const[count, setCount]= useState(0);
   const handleClick = () => {
    //  alert("You clicked me!");
    setCount (count + 1)
   };
   
 
useEffect(() => {
   console.log("Component mounted or updated");
 });
 
useEffect(() => {
   console.log("Only on first load");
 }, []);
 
 useEffect(() => {
   console.log("Count changed! THe count is now "  +  count);
 }, [count]);

 useEffect(() => {
   const timer = setInterval(() => {
     console.log("Tick");
   }, 1000);
 
   return () => clearInterval(timer);
 }, []);
 
 
   return <button onClick={handleClick}>Click Me</button>;
}

export default Clicker 

