import React from 'react';
import Forms from "../components/Forms"

class SearchAndFind extends React.Component{

constructor(props) {
  super(props)
  this.state = {
      hasSearch: false,
      params: {}
  }
  this.sendData = this.sendData.bind(this);
}

sendData(params) {
    console.log("sendData pai")
    console.log(params)
    this.setState({params: params, hasSearch: true})
    console.log(this.state)
}

renderSearchFind() {
    console.log(this.state)
    if (this.state.hasSearch) {
        console.log("entrei aqui")
        return 
    }
    const formInputs = [
        {name: 'dayInfo', className:'day-info', type:'date', placeholder:'dd/mm/aaaa', text:'Dia'},
        {name: 'startTimeInfo', className:'start-time-info', type:'text', placeholder:'HH:mm', text:'Hora de Início'},
        {name: 'endTimeInfo', className:'end-time-info', type:'text', placeholder:'HH:mm', text:'Hora de Fim'},
        {name: 'locationInfo', className:'location-info', type:'text', placeholder:'Cidade', text:'Cidade'}
    ]
    return (
        <Forms sendData={this.sendData} buttonName="Buscar" inputList={formInputs}/>
    )
}

  render() {
    return (
      <div className="first-screen">
        <div className="SearchOrFind">
          {this.renderSearchFind()}
        </div>
      </div>
      
    )
  }
}

export default SearchAndFind