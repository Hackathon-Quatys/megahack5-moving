import React from 'react';
import {Link} from 'react-router-dom'
import logo from "../images/moving-removebg-preview.png"

class FirstScreen extends React.Component{

constructor(props) {
  super(props)
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
          <Link to="/search" className="rent-car">Quero Alugar um Carro</Link>
          <Link to="/waitingLocator" className="have-car">Tenho um Carro Disponível</Link>
        </div>
      </div>
      
    )
  }
}

export default FirstScreen