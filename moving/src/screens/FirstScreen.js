import React from 'react';
import {Link} from 'react-router-dom'
import logo from "../images/moving-removebg-preview.png"
import '../style/homepage.css'

class FirstScreen extends React.Component{

  constructor(props) {
    super(props);
    this.state = {userID: ""}
  }

  componentDidMount() {
    console.log('myProps', this.props.location.state)
    if(this.props.location.state === undefined) this.props.history.push('/login')
    else this.setState({userID: this.props.location.state[0]})

    console.log('first screen', this.state.userID)
  }

  render() {
    return (
      <div className="first-screen">
        <div className="logo">
          <img src={logo} alt="Moving Logo"/>
        </div>
        <div className="buttons">

          <Link to={{pathname: "/locator", state: [{user: this.state.userID}]}}  className="rent-car"><p>Quero Alugar um Carro</p></Link>
          <Link to={{pathname: "/owner", state: [{user: this.state.userID}]}} className="have-car"><p>Tenho um Carro Disponível</p></Link>
        </div>
      </div>

    )
  }
}

export default FirstScreen