import React from 'react';
import PerfilModal from '../components/PerfilModal'

class FirstScreen extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      pending: false
    }
    this.changeProposal = this.changeProposal.bind(this);
  }

  componentDidMount() {
    //get value from DB
    this.setState({
      pending: false
    })
  }

  changeProposal() {
    const proposal = this.state.pending ? false : true
    this.setState({
      pending: proposal
    })
    console.log(this.state.pending)
  }

  renderModal() {
    if (this.state.pending) {
      return <PerfilModal 
          title="Proposta"
          imageURL="https://www.personal.tur.br/3fronteiras/wp-content/uploads/2012/01/Quaty.jpg"
          name="Alexandre Okita"
          message="Quero o carro para ganhar uma renda extra como motorista do Uber"
          detail="R$ 0,15km/h - 08h - 16/11"
          buttonType="YesNoButton"
          routineID="qualquer coisa"
          locatorID="qualquer coisa tbm"
        />
    }
    return 
  }

  render() {
    return (
      <div className="waiting-screen">
        <button onClick={this.changeProposal}>Change Proposal</button>
        {this.renderModal()}
        <div className="text">
          <h1>Aguardando Locadores</h1>
        </div>
      </div>
    )
  }
}

export default FirstScreen