import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar coinData={coinData} />
        
          <Route path="/" render={(props) => <Charts {...props} coinData={coinData} />} />
        
      </Router>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
