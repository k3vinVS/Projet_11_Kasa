import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import APropos from "./pages/APropos";
import Logement from "./pages/Logement";
import Header from "./components//header/Header";
import Footer from "./components/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/a_propos" element={<APropos />}></Route>
        <Route path="/logement" element={<Logement />}></Route>
        <Route path="*" element={<Error />}></Route>:
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
