import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import List from "./Components/List/List.jsx";
import Detail from "./Components/Detail/Detail.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [wineList, setWineList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productID, setProductID] = useState("");

  useEffect(() => {
    showList();
  }, []);

  const showList = () => {
    setLoading(true);
    fetch(
      "https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/list?page=1"
    )
      .then((res) => res.json())
      .then((result) => {
        const product = result.value.products;
        console.log(product);
        setWineList(product);
        setLoading(false);
      })
      .catch(() => {
        alert("Please refresh the page!");
        setLoading(false);
      });
  };

  const productNumber = (e) => {
    let itemID = e.target.id;
    // console.log(e.target.id);
    setProductID(itemID);
  };

  const addItem = (e) => {
    let itemName = e.target.data;
    // console.log(itemName);
    alert(`${itemName} is added to cart!`);
  };

  const addBookmark = (e) => {
    let itemName = e.target.data;
    // console.log(itemName);
    alert(`${itemName} is bookmarked!`);
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/detail">
          <Detail
            loading={loading}
            setLoading={setLoading}
            productID={productID}
            addItem={addItem}
            addBookmark={addBookmark}
          />
        </Route>
        <Route path="/">
          <List
            wineList={wineList}
            loading={loading}
            setLoading={setLoading}
            productNumber={productNumber}
            addItem={addItem}
            addBookmark={addBookmark}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
