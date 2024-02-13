import React from "react";
import Navbar from "./components/Home/Navbar";
import MainRoutesProvider from "./routes/MainRoutesProvider";
import Footer from "./components/Home/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <MainRoutesProvider />
      <Footer />
    </>
  );
};

export default App;
