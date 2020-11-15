import React from 'react';
import Forms from "../components/Forms"
import Find from "../components/Find"


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
        return (
            <Find params={this.state.params} user={this.props.user}/>
        )
    }
    const formInputs = [
        {name: 'dayInfo', className:'day-info', type:'date', placeholder:'dd/mm/aaaa', text:'Dia'},
        {name: 'locationInfo', className:'location-info', type:'text', placeholder:'Cidade', text:'Cidade'}
    ]
    return (
        <Forms sendData={this.sendData} buttonName="Buscar" inputList={formInputs}/>
    )
}

  render() {
    return (
      <div className="first-screen">
        <div className="search-title">
          <h3 className="search-title-text">Busca por carro</h3>
        </div>
        <div className="SearchOrFind">
          {this.renderSearchFind()}
        </div>
      </div>

    )
  }
}

export default SearchAndFind