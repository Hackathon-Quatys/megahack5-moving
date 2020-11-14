import React from 'react';

class FirstScreen extends React.Component{
  haveCarButton() {
    return
  }

  render() {
    return (
      <div className="first-screen">
        <div className="logo">
          <img src="./images/moving-removebg-preview.png" alt="Moving Logo"/>
        </div>
        <div className="buttons">
          <div className="rent-car" onClick={rentCarButton}>
            Quero alugar um carro
          </div>
          <div className="have-car" onClick={haveCarButton}>
            Tenho um carro disponível
          </div>
        </div>
      </div>
      
    )
  }
}

export default FirstScreen