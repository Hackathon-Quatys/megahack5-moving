import React from 'react';
import db from '../FirestoreConnection'
import '../style/waiting.css'


class YesNoButtonFind extends React.Component{
  
    constructor(props) {
        super(props)
        this.yesButton = this.yesButton.bind(this);
        this.noButton = this.noButton.bind(this);
    }

    async yesButton() {
        //update routine status to pending and give routine to locator
        console.log('yes', this.props.routineID)
        console.log('locator', this.props.locatorID)
        const routinesRef = await db.collection("routines")
        await routinesRef.doc(this.props.routineID).update({status: "pending", locatorID: this.props.locatorID});
    }

    async noButton() {
        this.props.moveData()
    }

    render() {
      return (
        <div className="buttonsModal">
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
  
  export default YesNoButtonFind