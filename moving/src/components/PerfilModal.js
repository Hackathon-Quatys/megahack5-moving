import React from 'react';
import YesNoButton from './YesNoButton'

class PerfilModal extends React.Component{

    constructor(props) {
      super(props)
    }

    getButton() {
        switch (this.props.buttonType) {
            case "YesNoButton":
                return <YesNoButton routineID={this.props.routineID} locatorID={this.props.locatorID}/>
                break;
            default:
                break;
        }
    }
  
    render() {
      return (
        <div className="modal">
            <div className="title">
                <h1>{this.props.title}</h1>
            </div>
            <div className="perfil-image">
                <img src={this.props.imageURL} alt="Perfil Image"/>
            </div>
            <div className="name">
                <h2>{this.props.name}</h2>
            </div>
            <div className="message">
                <p>{this.props.message}</p>
            </div>
            <div className="detail">
                <b>{this.props.detail}</b>
            </div>
            <div className="action">
                {this.getButton()}
            </div>
        </div>
      )
    }
  }
  
  export default PerfilModal