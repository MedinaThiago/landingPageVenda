import React, { useState } from "react";
import capa from "./assets/capa-ebook.jpeg";
import "./App.scss";
import Cards from "./components/Cards.js";

import env from "dotenv";
env.config();

function App() {
  return (
    <div className="corpo">
      <div className="row">
        <section className="header">
          <h3 className="bold title-card title">
            Fique no shape comendo o que gosta!
          </h3>
          <div className="video">
            <iframe
              className="video-frame"
              src="https://www.youtube.com/embed/D4-XL1SsuYU"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <button className="button mb-5" onClick={() => {}}>
            Sim! Quero ficar no shape comendo o que gosto!
          </button>
        </section>
      </div>

      <div className="row p-md-5 container-ebook">
        <div className="col-md-3 expert">
          <img src={capa} className="img-fluid expertImg" />
        </div>
        <p className="offset-md-2 col-md-7 text-container-ebook">
          Você, assim como eu, já teve ou está passando por péssimas
          experiências com dietas da moda super restritivas. Antigamente eu
          achava que só podia comer batata doce, frango e ovos, mas o grande
          problema é que eu odeio batata doce! E agora? Terei que comer o que
          não gosto ou não vou conseguir desenvolver meus músculos ou perder
          gordura??? Mas então, não é bem assim que funciona. Eu estudei muito e
          aprendi que esse não é o único caminho. Por isso fiz nesse livro
          coloquei todo meu conhecimento para encurtar o seu caminho no processo
          de perda de gordura ou ganho de massa, mostrando que é possível Ficar
          no Shape comendo o que gosta.
        </p>
      </div>

      <div></div>
      <div className="row p-md-4 card-container">
        <div className="col-12 mt-3 mb-3 text-center">
          <h3 className="bold title-card">Com o meu ebook você aprenderá...</h3>
        </div>
        <Cards />
      </div>
    </div>
  );
}

export default App;
