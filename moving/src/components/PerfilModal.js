import React from 'react';
import YesNoButton from './YesNoButton'
import ContactConfirmButton from './ContactConfirmButton'
import '../style/waiting.css'

class PerfilModal extends React.Component{

    constructor(props) {
      super(props)
    }

    getButton() {
        switch (this.props.buttonType) {
            case "YesNoButton":
                return <YesNoButton routineID={this.props.routineID} locatorID={this.props.locatorID}/>
                break;
            case "ContactConfirmButton":
                return <ContactConfirmButton routineID={this.props.routineID}/>
            default:
                break;
        }
    }
  
    render() {
      return (
        <div className="modal">
            <div className="title">
                <h1 className="title-text-modal">{this.props.title}</h1>
            </div>
            <div className="perfil-image">
                <img className="image-modal" src={this.props.imageURL} alt="Perfil Image"/>
            </div>
            <div className="name">
                <h2 className="name-text-modal">{this.props.name}</h2>
            </div>
            <div className="message">
                <p className="message-text-modal">{this.props.message}</p>
            </div>
            <div className="detail">
                <p className="detail-text-modal">{this.props.detail}</p>
            </div>
            <div className="action">
                {this.getButton()}
            </div>
        </div>
      )
    }
  }
  
  export default PerfilModal