import React from 'react';

class YesNoButton extends React.Component{
  
    constructor(props) {
        super(props)
        this.yesButton = this.yesButton.bind(this);
        this.noButton = this.noButton.bind(this);
    }

    yesButton() {
        //update routine status to closed
        console.log(this.props.routineID)      
    }

    noButton() {
        //update routine status to open
        console.log(this.props.routineID)

        //update locator activate routine to null
        console.log(this.props.locatorID)
    }

    render() {
      return (
        <div className="buttons">
            <h1>{this.props.routineID}</h1>
            <div className="yes" onClick={this.yesButton}>
                <b>Yes</b>
            </div>

            <div className="no" onClick={this.noButton}>
                <b>No</b>
            </div>

        </div>
      )
    }
  }
  
  export default YesNoButton