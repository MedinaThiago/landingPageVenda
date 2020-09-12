import React from "react";
import provaSocial1 from "../assets/prova-social-1.jpeg";
import provaSocial2 from "../assets/prova-social-2.jpeg";
import provaSocial3 from "../assets/prova-social-3.jpeg";
import provaSocial4 from "../assets/prova-social-4.jpeg";
import provaSocial5 from "../assets/prova-social-5.jpeg";
import provaSocial6 from "../assets/prova-social-6.jpeg";

export default () => {
  return (
    <div className="offset-lg-4 col-lg-6 offset-sm-3 col-sm-6 mb-3 m-auto">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={provaSocial1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={provaSocial2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={provaSocial3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={provaSocial4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={provaSocial5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={provaSocial6} className="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
