import React from 'react';
import {Link} from 'react-router-dom'
import logo from "../images/moving-removebg-preview.png"
import '../style/homepage.css'

class FirstScreen extends React.Component{

constructor(props) {
  super(props)
}

  render() {
    return (
      <div className="first-screen">
        <div className="logo">
          <img src={logo} alt="Moving Logo"/>
        </div>
        <div className="buttons">
          <Link to="/search" className="rent-car"><p>Quero Alugar um Carro</p></Link>
          <Link to="/waitingLocator" className="have-car"><p>Tenho um Carro Disponível</p></Link>
        </div>
      </div>

    )
  }
}

export default FirstScreen