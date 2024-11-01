/* 
  This assignment is to test your understanding of React and JavaScript.
  Requirement: 
    1. Get data from the a dummy API (fakeAPI) in util.js fakeAPI function
    2. Print Loading ... during call API
    3. Show up all the movie 
    4. Implenenting complete Search functionality
      - When user type in the search box, the list of movies should be show up based on the search keyword 
*/

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>INTERVIEW REACT</h1>
        <input type="text" placeholder="Search..." />
      </div>
    </>
  );
}

export default App;
