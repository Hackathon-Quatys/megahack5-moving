import React from 'react';
import db from "../FirestoreConnection"
import OwnerRegister from './OwnerRegister'
import WaitingLocator from './WaitingLocator'
import {Link} from 'react-router-dom'
import '../style/ownerRegister.css'

class OwnerFlow extends React.Component{

constructor(props) {
  super(props)
  this.state = {
    mounted: false,
    user: {}
  }
}

async componentDidMount() {
  //get value from DB
  console.log(this.props.location)
  var userID = this.props.location.state[0].user.user;
  console.log(userID)
  var user = await (await db.collection("users").doc(userID).get()).data();
  console.log('user', user)

  await this.setState({
    user: user,
    userID: userID,
    mounted: true
  })

  console.log('state', this.state)


}

buildFlow() {
  if (this.state.mounted) {
    console.log(this.state)
    if (this.state.user.routine_created === "") {
      return <OwnerRegister user={this.state.userID}/>
    } else {
      console.log("entrando no waitingLocator", this.state.user.routine_created)
      return <WaitingLocator user={this.state.userID} routine={this.state.user.routine_created}/>
    }
  } else {
    return <h1>Loading</h1>
  }
  
}

  render() {
    return (
      <div className="locator-flow">
        <div className="return-button">
          <Link to={{pathname: "/", state: [{user: this.state.userID}]}}>
            <h1 className="home-text">HOME</h1>
          </Link>
        </div>
        {this.buildFlow()}
      </div>
      
    )
  }
}

export default OwnerFlow