import "./App.css";
import React, { useEffect, useState } from "react";
import BestCoincap from "./component/BestCoincap";
import Search from "./component/Search";
const App =()=> {

  // const[coin,setCoin]=useState('');
  const[coinList,setCoinList]=useState('');


  useEffect(() => {
    const fetchCoinData = async () => {
      const request=await fetch('https://api.coincap.io/v2/assets');
      const data = await request.json;
      console.log(data)
    };
    fetchCoinData();
  }, []);
  
  return (
    <div>
      <h1>Welcome to Coines</h1>
      <BestCoincap />
      <Search coinList={coinList}/><br></br>
    
    </div>
  )

};

export default App;