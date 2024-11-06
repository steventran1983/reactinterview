/* 
  This assignment is to test your understanding of React and JavaScript.
  Requirement: 
    1. Get data from the a dummy API (fakeAPI) in util.js fakeAPI function
    3. Show up all the userInfo {name,age and gender}
    4. Implement Add function in Add button to 
    - when user click add button , his/her name will be show up in selecated list 
*/

import { useEffect, useState } from "react";
import "./App.css";
import { fakeAPI } from "./util";

function App() {
  // console.log(items);
  return (
    <>
      <div>
        <h1>INTERVIEW REACT</h1>
      </div>
    </>
  );
}

export default App;
