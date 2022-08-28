/** @format */

import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./App.scss";
import Homepage from "./components/homepage/Homepage";
import Scrolltop from "./components/scrolltop/Scrolltop";
import Sidenav from "./components/sidenav/Sidenav";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidenav />
      <Scrolltop />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
