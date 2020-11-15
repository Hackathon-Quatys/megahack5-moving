import React from 'react';
import db from "../FirestoreConnection"
import SearchAndFind from './SearchAndFind'
import WaitingOwner from './WaitingOwner'

class FirstScreen extends React.Component{

constructor(props) {
  super(props)
}

async componentDidMount() {
  //get value from DB
  var userID = this.props.user;
  var user = await db.collection("users").doc(userID).get().data();

  this.setState({
    user: user
  })

}

buildFlow() {
  console.log("location", this.props.user)
  if (this.state.user.routine_active === '') {
    return <SearchAndFind user={this.props.location.user}/>
  } else {
    return <WaitingOwner user={this.props.location.user}/>
  }
}

  render() {
    return (
      <div className="locator-flow">
        {this.buildFlow()}
      </div>
      
    )
  }
}

export default FirstScreen