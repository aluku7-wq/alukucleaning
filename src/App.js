/** @format */

import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./App.scss";
import Homepage from "./components/homepage/Homepage";
import Scrolltop from "./components/scrolltop/Scrolltop";
import Sidenav from "./components/sidenav/Sidenav";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { GlobalState } from "./components/globalstate/Context";
const App = () => {
  const { display } = useContext(GlobalState);

  return (
    <div className="App">
      <Header />
      <AnimatePresence>{display && <Sidenav />}</AnimatePresence>
      <Scrolltop />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
