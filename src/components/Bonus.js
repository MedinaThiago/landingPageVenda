import React from "react";
import receitas from "../assets/receitas.jpeg";
import perguntas from "../assets/perguntas.jpeg";
import regra8020 from "../assets/regra-80-20.jpeg";

export default () => {
  return (
    <>
      <div className="col-12 mt-3 mb-3 text-center">
        <h3 className="bold title-card title-bonus">
          Estou adicionando 3 bônus! Ao comprar o livro, você ainda leva...
        </h3>
      </div>
      <div className="col-md-4">
        <img
          alt="Ebook de receitas"
          src={receitas}
          className="img-fluid expertImg py-3"
        />
        <h4 className="card-text">
          Ebook com 8 receitas incríveis para você encaixar no dia a dia{" "}
        </h4>
      </div>
      <div className="col-md-4">
        <img
          alt="Ebook de duvidas frequentes"
          src={perguntas}
          className="img-fluid expertImg py-3"
        />
        <h4 className="card-text">
          Ebook respondendo dúvidas mais frequentes sobre o assunto
        </h4>
      </div>
      <div className="col-md-4">
        <img
          alt="Video aula regra 80/20"
          src={regra8020}
          className="img-fluid expertImg py-3"
        />
        <h4 className="card-text">
          Nesse vídeo falo tudo sobre a regra 80/20 e como colocar em prática
        </h4>
      </div>
    </>
  );
};
