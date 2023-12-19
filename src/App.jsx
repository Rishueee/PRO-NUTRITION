import React, { useState } from "react";
import FoodBox from "./components/FoodBox";
import FoodData from "./components/FoodData"
import './App.css';
import Search from "./components/Search.jsx";

const App = () => {
  const [search, searchbar] = useState("");
  const [amount, setamount] = useState(0);

  const handleSearch = (e) => {
    searchbar(e.target.value);
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />

      {
        FoodData.filter((val) => {
          if (search === "") {
            return val;
          }
          else if (val.name.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        }).map(footItem => {
          return (
            <div key={footItem.id}>
              <FoodBox food={footItem} amount={amount} />
            </div>
          )
        })
      }
    </div>
  )
}

export default App;
