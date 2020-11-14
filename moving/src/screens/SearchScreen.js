import React from 'react';
import {Link} from 'react-router-dom'
import Geocode from "react-geocode";

class SearchScreen extends React.Component {

    constructor(props)  {
        super(props)
        this.state = {
            dayInfo: '',
            startTimeInfo: '',
            endTimeInfo: '',
            locationInfo: '',
            descriptionIndo: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.getGeocodeByAddress = this.getGeocodeByAddress.bind(this);
    }

    handleInputChange(event) {
        console.log(this.state.locationInfo)
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({[name]: value});
        console.log(this.state.locationInfo)

    }

    async getGeocodeByAddress() {
        const address = this.state.locationInfo

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ location: address,  "options": {"thumbMaps": false} })
        };
        const response = await  fetch('http://open.mapquestapi.com/geocoding/v1/address?key=RQetvezG4WGwfcFlc6usLLQplCp5IHk8', requestOptions)
        const result = await response.json()
        console.log(result.results[0].locations[0].displayLatLng)
    }


    render() {
        return(
            <div className="search-screen">

                <div className="search-form">
                    <div className="search-title">
                        <h1>Busca por carro</h1>
                    </div>
                    <form>
                        <div className="day-div">
                            <h3>dia</h3>
                            <input type="date" name="dayInfo" className="day-info" placeholder="dd/mm/aaaa" value={this.state.dayInfo} onChange={this.handleInputChange}/>

                        </div>
                        
                        <div className="start-time-div">
                            <h3>hora de inicio</h3>
                            <input type="text" name="startTimeInfo" className="start-time-info" placeholder="HH:mm" value={this.state.startTimeInfo} onChange={this.handleInputChange}/>

                        </div>

                        <div className="end-time-div">
                            <h3>hora de término</h3>
                            <input type="text" name="endTimeInfo" className="end-time-info" placeholder="HH:mm" value={this.state.endTimeInfo} onChange={this.handleInputChange}/>

                        </div>

                        <div className="location-div">
                            <h3>localização</h3>
                            <input type="text"  name="locationInfo" className="location-info" placeholder="Endereço" value={this.state.locationInfo} onChange={this.handleInputChange}/>

                        </div>

                        <div className="description-div">
                            <h3>propósito</h3>
                            <input type="text" name="descriptionInfo" className="description-info" placeholder="Descrição" value={this.state.descriptionInfo} onChange={this.handleInputChange}/>
                        </div>

                    </form>
                    <button onClick={()=>this.getGeocodeByAddress()}>
                        Oi
                    </button>
                </div>

            </div>
        )
    }




}

export default SearchScreen