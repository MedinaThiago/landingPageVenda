import React from "react";
import capa from "./assets/capa-ebook.jpeg";
import provaSocial1 from "./assets/prova-social-1.jpeg"
import provaSocial2 from "./assets/prova-social-2.jpeg"
import provaSocial3 from "./assets/prova-social-3.jpeg"
import provaSocial4 from "./assets/prova-social-4.jpeg"
import provaSocial5 from "./assets/prova-social-5.jpeg"
import provaSocial6 from "./assets/prova-social-6.jpeg"
import receitas from "./assets/receitas.jpeg"
import perguntas from "./assets/perguntas.jpeg"
import regra8020 from "./assets/regra-80-20.jpeg"
import compraSegura from "./assets/compra-segura.jpeg"
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
          <img src={capa} alt='Capa Do Ebook' className="img-fluid expertImg" />
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
          <h3 className="bold title-card">
            Com o meu ebook você aprenderá...
          </h3>
        </div>
        <Cards />
      </div>


      <div className="row p-md-4">
        <div className="col-12 mt-3 mb-3 text-center">
          <h3 className="bold title-card">
            É verdade que posso comer de tudo e ficar no shape? Olha aí
          </h3>
        </div>
        <div className="row">
          <div className="col-md-6 expert">
            <img alt='Prova social 1' src={provaSocial1} className="img-fluid expertImg" />
          </div>
          <div className="col-md-6 expert">
            <img alt='Prova social 2' src={provaSocial2} className="img-fluid expertImg" />
          </div>
          <div className="col-md-6 expert">
            <img alt='Prova social 3' src={provaSocial3} className="img-fluid expertImg" />
          </div>
          <div className="col-md-6 expert">
            <img alt='Prova social 4' src={provaSocial4} className="img-fluid expertImg" />
          </div>
          <div className="col-md-6 expert">
            <img alt='Prova social 5' src={provaSocial5} className="img-fluid expertImg" />
          </div>
          <div className="col-md-6 expert">
            <img alt='Prova social 6' src={provaSocial6} className="img-fluid expertImg" />
          </div>
        </div>

      </div>

      <div className="row p-md-4">
        <div className="col-12 mt-3 mb-3 text-center">
          <h3 className="bold title-card">
            ESTOU ADICIONANDO 3 BÔNUS!  AO COMPRAR O LIVRO, VOCÊ AINDA LEVA...
          </h3>
        </div>
        <div>
          <img alt='Ebook de receitas' src={receitas} className="img-fluid expertImg" />
          <h4>Ebook com 8 receitas incríveis para você encaixar no dia a dia </h4>
          <img alt='Ebook de duvidas frequentes' src={perguntas} className="img-fluid expertImg" />
          <h4>Ebook respondendo dúvidas mais frequentes sobre o assunto</h4>
          <img alt='Video aula regra 80/20' src={regra8020} className="img-fluid expertImg" />
          <h4>Nesse vídeo falo tudo sobre a regra 80/20 e como colocar em prática</h4>
        </div>
      </div>

      <div className="row p-md-4">
        <button
          className="button mb-5"
          onClick={() => { }}
        >
          SIM!!! QUERO FICAR NO SHAPE COMENDO O QUE GOSTO!
        </button>
        <img alt='Compra segura, Satisfação garantida, Privacidade protegida' src={compraSegura} className="img-fluid expertImg" />
      </div>
    </div>

  );
}

export default App;
