import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Products from "./components/Products";
import CloseRestaruant from "./components/CloseRestaruant";
import CopyRight from "./components/CopyRight";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container">
        <Products />
        <CloseRestaruant />
        <CopyRight />
      </div>
    </div>
  );
};

export default App;
