import React from 'react';

class ContactConfirmButton extends React.Component{
  
    constructor(props) {
        super(props)
        this.chatButton = this.chatButton.bind(this);
        this.phoneButton = this.phoneButton.bind(this);
        this.confirmButton = this.confirmButton.bind(this);
    }

    chatButton() {
        alert("Não disponível na Demo")      
    }

    phoneButton() {
        alert("Não disponível na Demo")      
    }

    confirmButton() {
        //update routine status to confirmed
        console.log(this.props.routineID)
    }

    render() {
      return (
        <div className="chat">
            <div className="" onClick={this.chatButton}>
                <b>Chat</b>
            </div>

            <div className="phone" onClick={this.phoneButton}>
                <b>Telefone</b>
            </div>
            
            <div className="confirm" onClick={this.confirmButton}>
                <b>Confirmar início de viagem</b>
            </div>
        </div>
      )
    }
  }
  
  export default ContactConfirmButton