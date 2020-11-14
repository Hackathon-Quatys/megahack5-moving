import React from 'react';
import PerfilModal from '../components/PerfilModal'

class FirstScreen extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      status: "closed",
      statusMessage: "Aguardando Locadores"
    }
    this.changeProposal = this.changeProposal.bind(this);
  }

  componentDidMount() {
    //get value from DB
    this.setState({
      status: "closed"
    })
  }

  changeProposal() {
    const proposal = this.state.status === "closed" ? "pending" : "closed"
    this.setState({
      status: proposal
    })
    this.state.status === "closed" ? this.setState({statusMessage: "Aguardando Resposta da Proposta"}) : this.setState({statusMessage: "Aguardando Locadores"})
    console.log(this.state.status)
  }

  renderModal() {
    switch (this.state.status) {

      case "closed":
        return (
          <div>
            <h2> Ainda não há propostas para o seu veículo </h2>
          </div>
        )
      
      case "pending":
        return (
          <PerfilModal 
          title="Proposta"
          imageURL="https://www.personal.tur.br/3fronteiras/wp-content/uploads/2012/01/Quaty.jpg"
          name="Alexandre Okita"
          message="Quero o carro para ganhar uma renda extra como motorista do Uber"
          detail="R$ 0,15km/h - 08h - 16/11"
          buttonType="YesNoButton"
          routineID="qualquer coisa"
          locatorID="qualquer coisa tbm"
          />
        )
      default:
        break;
    }
  }

  render() {
    return (
      <div className="waiting-screen">
        <button onClick={this.changeProposal}>Change Proposal</button>
        {this.renderModal()}
        <div className="text">
          <h1>{this.state.statusMessage}</h1>
        </div>
      </div>
    )
  }
}

export default FirstScreen