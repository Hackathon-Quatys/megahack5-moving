import React from 'react';
import PerfilModal from '../components/PerfilModal';
import db from '../FirestoreConnection';
import '../style/waiting.css'

class WaitingOwner extends React.Component{

    constructor(props) {
        super(props)
        this.sate = {
            statusMessage: "Aguardando Locatário",
            status: "pending",
            user: "UIF092750hf230",
            routineID: "",
            routine: {},
            locator: {},
        }
    }

    // async componentDidMount() {
    //     //get value from DB
    //     var userID = this.state.user;
    //     var usersRef = await db.collection("users").doc(userID).get();
    //     var routineID = await usersRef.data().routine_created;
    
    //     var routinesRef = await db.collection("routines").doc(routineID).get();
    //     const routine = routinesRef.data();
    
    //     var locator = {}
    //     if (routine.status !== "open") {
    //       var locatorRef = await db.collection("users").doc(routine.locatorID).get()
    //       locator = locatorRef.data()
    //     }
    
    //     this.setState({
    //       status: routine.status,
    //       routineID: routineID,
    //       routine: routine,
    //       locator: locator
    //     })
    // }

    setStatusMessage() {
        console.log("ESTADO", this.state)
        switch (this.state.status) {
          case "pending":
            return "Aguardando Resposta da Proposta"
          case "confirmed":
            return "Locação Agendada"
          default:
            return "no status found"
        }
    }

    renderModal() {
      switch (this.state.status) {
        
        case "pending":
          return (
            <PerfilModal 
            title="Proposta"
            imageURL={this.state.locator.photo}
            name={this.state.locator.name}
            message="Quero o carro para ganhar uma renda extra como motorista do Uber"
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
        return(
            <div className="waiting-screen">
                <h1>BATATA</h1>
            </div>
        )
    }



}

export default WaitingOwner