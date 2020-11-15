import React from 'react';
import Forms from "../components/Forms"

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
            {name: 'nameOwner', className:'name-owner', type:'text', placeholder:'Arlindo Orlando', text:'Nome'},
            {name: 'freeDayCar', className: 'free-day-car', type:'date', placeholder:'dd/mm/aaaa', text:'Dia disponível'},
            {name: 'initFreeHour', className: 'init-free-hoour', type: 'text', placeholder:'HH:mm', text:'Hora inicial disponivel'},
            {name: 'returnHour', className: 'return-hour', type: 'text', placeholder:'HH:mm', text: 'Horário de retorno'},
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