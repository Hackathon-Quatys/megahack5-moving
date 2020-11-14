import React from 'react';
import {Link} from 'react-router-dom'

class SearchScreen extends React.Component {

    constructor(props)  {
        super(props)
    }

    render() {
        return(
            <container className="search-screen">

                <div className="search-form">
                    <div className="search-title">
                        <h1>Busca por carro</h1>
                    </div>
                    <form>
                        <div className="day-div">
                            <h3>dia</h3>
                            <input type="date" id="day-response" className="day-info"/>

                        </div>
                        
                        <div className="start-time-div">
                            <h3>hora de inicio</h3>
                            <input type="text" id="start-time-response" className="start-time-info"/>

                        </div>

                        <div className="end-time-div">
                            <h3>hora de término</h3>
                            <input type="text" id="end-time-response" className="end-time-info"/>

                        </div>

                        <div className="location-div">
                            <h3>localização</h3>
                            <input type="text" id="location-response" className="location-info"/>

                        </div>

                        <div className="description-div">
                            <h3>propósito</h3>
                            <input type="text" id="description-response" className="description-info"/>
                        </div>

                    </form>
                </div>

            </container>
        )
    }




}

export default SearchScreen