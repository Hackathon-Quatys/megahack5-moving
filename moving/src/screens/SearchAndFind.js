import React from 'react';
import SearchScreen from "../components/SearchScreen"

class SearchAndFind extends React.Component{

constructor(props) {
  super(props)
  this.state = {
      hasSearch: false,
      params: {}
  }
  this.onGetSearch = this.onGetSearch.bind(this);
}

onGetSearch(params) {
    console.log("onGetSearch pai")
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
    return <SearchScreen onGetSearch={this.onGetSearch}/>
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