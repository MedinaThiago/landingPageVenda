import React from "react";

import Cards from "./components/Cards.js";
import Carrossel from "./components/Carrossel";
import Header from "./components/Header";
import Ebook from "./components/Ebook";
import Bonus from "./components/Bonus";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="corpo">
      <div className="row">
        <Header />
      </div>

      <Ebook />

      <div></div>
      <div className="row p-4 card-container">
        <div className="col-12 mt-3 mb-3 text-center">
          <h3 className="bold title-card">Com o meu ebook você aprenderá...</h3>
        </div>
        <Cards />
      </div>

      <div className="row p-md-4 shape-container">
        <div className="col-12 mt-3 mb-3 text-center">
          <h3 className="bold title-card">
            É verdade que posso comer de tudo e ficar no shape? Olha aí!
          </h3>
        </div>
        <Carrossel />
      </div>

      <div className="row p-md-4 bonus">
        <Bonus />
      </div>

      <div className="row p-md-4 text-center">
        <Footer />
      </div>
    </div>
  );
}

export default App;
