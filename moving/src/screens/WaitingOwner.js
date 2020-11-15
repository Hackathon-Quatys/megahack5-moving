import React from 'react';
import PerfilModal from '../components/PerfilModal';
import db from '../FirestoreConnection';
import '../style/waiting.css'

class WaitingOwner extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            statusMessage: "Aguardando Locatário",
            status: "pending",
            routineID: "",
            routine: {},
            owner: {},
        }
    }

    async componentDidMount() {
        //get value from DB
        var userID = this.props.user;
        console.log("userID", userID)
        var usersRef = await db.collection("users").doc(userID).get();
        var routineID = await usersRef.data().routine_active;
    
        var routinesRef = await db.collection("routines").doc(routineID).get();
        const routine = routinesRef.data();
    
        var owner = {}
        if (routine.status !== "open") {
          var ownerRef = await db.collection("users").doc(routine.ownerID).get()
          owner = ownerRef.data()
        }
    
        this.setState({
          status: routine.status,
          routineID: routineID,
          routine: routine,
          owner: owner
        })
    }

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
            title="Aguardando Resposta"
            imageURL={this.state.owner.photo}
            name={this.state.owner.name}
            message={`Veículo: ${this.state.routine.car} \n Horário: ${this.state.routine.start_time}h - ${this.state.routine.end_time}h \n Preço: R$${this.state.routine.price},00 \n Local: ${this.state.routine.location}`  }
            routineID={this.state.routineID}
            locatorID={this.state.routine.locatorID}
            />
          )
        
        case "confirmed":
          return (
            <PerfilModal 
            title="Seu pedido foi aceito!"
            imageURL={this.state.owner.photo}
            name={this.state.owner.name}
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
                {this.renderModal()}
            </div>
        )
    }



}

export default WaitingOwner