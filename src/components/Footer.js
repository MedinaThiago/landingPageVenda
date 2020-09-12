import React from "react";
import compraSegura from "../assets/compra-segura.jpeg";

export default () => {
  return (
    <>
      <div className="col-12">
        <button
          className="button mb-5 mt-3"
          onClick={() => {
            window.location.href =
              "https://pay.hotmart.com/N40925635B?off=yq21dk4a";
          }}
        >
          Sim!!! Quero ficar no shape comendo o que gosto!
        </button>
      </div>
      <div className="col-12 p-4">
        <img
          alt="Compra segura, Satisfação garantida, Privacidade protegida"
          src={compraSegura}
          className="img-fluid expertImg"
        />
      </div>
    </>
  );
};
