import React from 'react';
import db from '../FirestoreConnection'
import '../style/waiting.css'


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
        window.location.reload();
    }

    async noButton() {
        //update routine status to open
        const routinesRef = await db.collection("routines")
        await routinesRef.doc(this.props.routineID).update({status: "open", locatorID: ""});

        //update locator activate routine to null
        const usersRef = await db.collection("users")
        await usersRef.doc(this.props.locatorID).update({routine_active: ""});
        window.location.reload();
    }

    render() {
      return (
        <div className="buttons">
            <div className="yes" onClick={this.yesButton}>
                <b>Sim</b>
            </div>

            <div className="no" onClick={this.noButton}>
                <b>Não</b>
            </div>

        </div>
      )
    }
  }
  
  export default YesNoButton