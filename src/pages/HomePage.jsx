import React from "react";
import SideBar from "../components/Home/SideBar";
import CardsList from "../components/product/CardsList";

const HomePage = () => {
  return <div style={{display:"flex" }}>
      <div style={{width: "300px", flex: "none"}}>
        <SideBar />
      </div>
      <CardsList />
  </div>;
};

export default HomePage;
