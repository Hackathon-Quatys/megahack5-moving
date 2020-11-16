import React from 'react';
import PerfilModal from '../components/PerfilModal';
import db from '../FirestoreConnection';
import '../style/waiting.css'

class WaitingLocatorScreen extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      routineID: this.props.routine,
      status: "open",
      statusMessage: "Aguardando Locadores",
      routine: {},
      locator: {}
    }
  }

  async componentDidMount() {
    //get value from DB
    var routinesRef = await db.collection("routines").doc(this.state.routineID).get();
    const routine = routinesRef.data();

    var locator = {}
    if (routine.status !== "open") {
      var locatorRef = await db.collection("users").doc(routine.locatorID).get()
      locator = locatorRef.data()
    }

    this.setState({
      status: routine.status,
      routine: routine,
      locator: locator
    })
  }

  setStatusMessage() {
    console.log("ESTADO", this.state)
    switch (this.state.status) {
      case "open":
        return "Aguardando Locatários"
      case "pending":
        return "Proposta Pendente"
      case "confirmed":
        return "Locação Agendada"
      default:
        return "no status found"
    }
  }

  buildDetail() {
    console.log('LOG ROTINA DATA:', this.state.routine.date)
    var formatDate = this.state.routine.date
    return `R$${this.state.routine.price} | ${this.state.routine.start_time}h - ${this.state.routine.end_time}h | ${formatDate}`
  }

  renderModal() {
    switch (this.state.status) {

      case "open":
        return (
          <div className="no-proposes">
            <h2 className="no-proposes-text"> Ainda não há propostas para o seu veículo </h2>
          </div>
        )
      
      case "pending":
        return (
          <PerfilModal 
          title="Proposta"
          imageURL={this.state.locator.photo}
          name={this.state.locator.name}
          detail={this.buildDetail()}
          buttonType="YesNoButton"
          routineID={this.state.routineID}
          locatorID={this.state.routine.locatorID}
          />
        )
      
      case "confirmed":
        return (
          <PerfilModal 
          title="Viagem Agendada"
          imageURL={this.state.locator.photo}
          name={this.state.locator.name}
          detail={this.buildDetail()}
          buttonType="ContactConfirmButton"
          routineID={this.state.routineID}
          />
        )
      default:
        break;
    }
  }

  render() {
    return (
      <div className="waiting-screen">
        {this.renderModal()}
        <div className="text">
          <h2 className="status-text"> {this.setStatusMessage()} </h2>
        </div>
      </div>
    )
  }
}

export default WaitingLocatorScreen