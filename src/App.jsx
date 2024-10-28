/* 
  This assignment is to test your understanding of React and JavaScript.
  Requirement: 
    1. Get data from the a dummy API (fakeAPI) in util.js fakeAPI function
    2. Print Loading ... during call API
    3. Show up the 10 random numbers in the UI after the API call
    4. Sort the numbers in ascending order and show in UI 
*/

import { useEffect, useState } from "react";
import "./App.css";
import { fakeAPI } from "./util";
import { Sort } from "./Sort";
function App() {
  const [numbers, setNumbers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await fakeAPI();
    setNumbers(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(`This is the number ${numbers}`);
  return (
    <>
      <div>
        <h1>INTERVIEW REACT</h1>
        {loading
          ? "Loading..."
          : numbers?.map((number, index) => <span key={index}> {number}</span>)}
        <Sort data={numbers} />
      </div>
    </>
  );
}

export default App;
