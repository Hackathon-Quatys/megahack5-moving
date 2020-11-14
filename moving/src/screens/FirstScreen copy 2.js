import React from 'react';
import logo from "../images/moving-removebg-preview.png"

class FirstScreen extends React.Component{

constructor(props) {
  super(props)
}

  haveCarButton() {
    console.log("have car button")
  }

  rentCarButton() {
    console.log("rent car button")
  }

  render() {
    return (
      <div className="first-screen">
        <div className="logo">
          <img src={logo} alt="Moving Logo"/>
        </div>
        <div className="buttons">
          <div className="rent-car" onClick={this.rentCarButton}>
            Quero alugar um carro
          </div>
          <div className="have-car" onClick={this.haveCarButton}>
            Tenho um carro disponível
          </div>
        </div>
      </div>
      
    )
  }
}

export default FirstScreen