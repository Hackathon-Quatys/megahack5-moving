import React from 'react';
import db from '../FirestoreConnection'
import '../style/waiting.css'
import { Redirect } from 'react-router-dom';


class YesNoButton extends React.Component{
  
    constructor(props) {
        super(props)
        this.yesButton = this.yesButton.bind(this);
        this.noButton = this.noButton.bind(this);
    }

    async yesButton() {
        //update routine status to confirmed
        const routinesRef = await db.collection("routines")
        await routinesRef.doc(this.props.routineID).update({status: "confirmed"});
        this.setState({refresh: true})
    }

    async noButton() {
        //update routine status to open
        const routinesRef = await db.collection("routines")
        await routinesRef.doc(this.props.routineID).update({status: "open", locatorID: ""});

        //update locator activate routine to null
        const usersRef = await db.collection("users")
        await usersRef.doc(this.props.locatorID).update({routine_active: ""});
        this.setState({refresh: true})
    }

    render() {
      return (
        <div className="buttonsModal">
            {this.state.refresh?<Redirect to={{pathname: "/", state: [{user: this.props.locatorID}]}}/>:<div/>}
            <div className="yes" onClick={this.yesButton}>
                <h5 className="yes-text">Sim</h5>
            </div>

            <div className="no" onClick={this.noButton}>
                <h5 className="yes-text">Não</h5>
            </div>

        </div>
      )
    }
  }
  
  export default YesNoButton