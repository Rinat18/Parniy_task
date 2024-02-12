import React from "react";
import Navbar from "./components/Home/Navbar";
import MainRoutesProvider from "./routes/MainRoutesProvider";

const App = () => {
  return (
    <>
      <Navbar />
      <MainRoutesProvider />
    </>
  );
};

export default App;
