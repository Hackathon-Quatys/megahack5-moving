import React from 'react';
import db from "../FirestoreConnection"
import SearchAndFind from './SearchAndFind'
import WaitingOwner from './WaitingOwner'

class LocatorFlow extends React.Component{

constructor(props) {
  super(props)
  this.state = {
    mounted: false,
    user: {}
  }
}

async componentDidMount() {
  //get value from DB
  var userID = this.props.location.state[0].user;
  console.log(userID)
  var user = await (await db.collection("users").doc("1WcgeoPH8MewHfiWTig2").get()).data();

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
    if (this.state.user.routine_active === '') {
      return <SearchAndFind user={this.state.userID}/>
    } else {
      return <WaitingOwner user={this.state.userID}/>
    }
  } else {
    return <h1>Loading</h1>
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

export default LocatorFlow