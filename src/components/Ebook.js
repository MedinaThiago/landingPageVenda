import React from 'react'
import capa from "../assets/capa-ebook.jpeg";


export default () => {
  return (
    <div className="row p-md-5 container-ebook">
    <div className="col-md-3 expert">
      <img src={capa} alt="Capa Do Ebook" className="img-fluid expertImg" />
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
  )
}