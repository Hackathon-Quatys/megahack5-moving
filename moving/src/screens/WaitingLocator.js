import React from 'react';
import PerfilModal from '../components/PerfilModal'

class FirstScreen extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      existProposal: false
    }
  }

  componentDidMount() {
    //get value from DB
    this.setState({
      existProposal: false
    })
  }

  changeProposal() {
    const proposal = this.state.existProposal ? false : true
    this.setState({
      existProposal: proposal
    })
  }

  render() {
    return (
      <div className="waiting-screen">
        <button onClick={this.changeProposal}>Change Proposal</button>
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
        <div className="text">
          <h1>Aguardando Locadores</h1>
        </div>
      </div>
    )
  }
}

export default FirstScreen