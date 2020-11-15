import React from 'react';
import {Link} from 'react-router-dom'

class CarResultScreen extends React.Component {

    constructor(props) {
        super(props)

    
    this.handleState = this.handleState.bind(this)
        
    }

    handleState() {
        console.log(this.props)
    }

    render() {
        return(
            <div className="resultsContainer" onClick={() => this.handleState()}>
                <h1>AHOY</h1>
            </div>
        )
    }
}

export default CarResultScreen