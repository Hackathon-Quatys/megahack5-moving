import React from 'react';
import Forms from "../components/Forms"
import "../style/ownerRegister.css";

class OwnerRegister extends React.Component {


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

    renderOwnerRegister() {
        console.log(this.state)

        if (this.state.hasSearch) {
            console.log("entrei aqui")
            return 
        }
        const formInputs = [
            {name: 'scheduleDay', className: 'owner-register-day', type:'date', placeholder:'dd/mm/aaaa', text:'Dia disponível'},
            {name: 'initHour', className: 'owner-register-init', type: 'text', placeholder:'HH:mm', text:'Hora inicial disponivel'},
            {name: 'finalHour', className: 'owner-register-final', type: 'text', placeholder:'HH:mm', text: 'Horário de retorno'},
            {name: 'city', className:'owner-register-city', type: 'text', placeholder: 'Cidade', text: 'Cidade'},
            {name: 'address', className: 'owner-register-address', type: 'text', placeholder:'Rua Tal, Numero Tal', text:'Endereço' }
        ]
        return (
            <div className="owner-form-div">
                <Forms sendData={this.sendData} buttonName="Buscar" inputList={formInputs}/>
            </div>
        )
    }


    render() {
        return(
            <div className="owner-register-container">
                <div className="owner-form">
                    <div className="owner-form-title">
                        <h1 className="owner-form-title-text">Informações para disponibilização do veículo</h1>
                    </div>
                    {this.renderOwnerRegister()}
                </div>

            </div>
        )
    }
    
    
    
    
}



export default OwnerRegister