import React from 'react';

class FirstScreen extends React.Component{

constructor(props) {
  super(props)
}

  render() {
    return (
      <div className="waiting-screen">
        <div className="text">
          <h1>Aguardando Locadores</h1>
        </div>
      </div>      
    )
  }
}

export default FirstScreen