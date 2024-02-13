import React from "react";
import CardsList from "../components/product/CardsList";

const HomePage = () => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div className="container">
        <CardsList />
      </div>
    </div>
  );
};

export default HomePage;
