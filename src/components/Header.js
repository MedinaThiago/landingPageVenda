/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

export default () => {
  return (
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
      <button
        className="button mb-5 mt-3"
        onClick={() => {
          window.location.href =
            "https://pay.hotmart.com/N40925635B?off=yq21dk4a";
        }}
      >
        Sim! Quero ficar no shape comendo o que gosto!
      </button>
    </section>
  );
};
