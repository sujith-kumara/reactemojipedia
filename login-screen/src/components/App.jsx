import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date().getHours();

// function renderConditionally(){
//     if (isLoggedIn === true){
//         return <h1>Hello</h1>
//     }else{
//       return <Login />
//     }
// }


function App() {
  return (
    <div className="container">
     {isLoggedIn === true ? <h1>Hello</h1>:<Login />}
      
    </div>
  );
}

export default App;
