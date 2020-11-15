import React from 'react';
import Forms from "../components/Forms"
import "../style/ownerRegister.css";
import db from "../FirestoreConnection";

class OwnerRegister extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            hasSearch: false,
            params: {}
        }
        this.sendData = this.sendData.bind(this);
    }


    async sendData(params) {
        console.log("sendData pai")
        console.log(params)
        this.setState({params: params, hasSearch: true})
        console.log(this.state)
        const randomId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        console.log(this.props.user)
        await db.collection('routines').doc(randomId).set({
            city: params.city,
            location: params.address,
            date: params.scheduleDay,
            start_time: params.initHour,
            end_time: params.finalHour,
            price: params.price,
            ownerID: this.props.user,
            locatorID: "",
            status: "open"
        })
        await db.collection('users').doc(this.props.user).update({
            routine_created: randomId
        })
        window.location.reload();
    }

    renderOwnerRegister() {
        console.log(this.state)

        if (this.state.hasSearch) {
            console.log("entrei aqui")
            return <h1>Reload the page</h1>
        }
        const formInputs = [
            {name: 'scheduleDay', className: 'owner-register-day', type:'date', placeholder:'dd/mm/aaaa', text:'Dia disponível'},
            {name: 'initHour', className: 'owner-register-init', type: 'text', placeholder:'HH:mm', text:'Hora inicial disponivel'},
            {name: 'finalHour', className: 'owner-register-final', type: 'text', placeholder:'HH:mm', text: 'Horário de retorno'},
            {name: 'city', className:'owner-register-city', type: 'text', placeholder: 'Cidade', text: 'Cidade'},
            {name: 'address', className: 'owner-register-address', type: 'text', placeholder:'Rua Tal, Numero Tal', text:'Endereço' },
            {name: 'price', className: 'price', type: 'number', placeholder:'50', text:'Preço' }
        ]
        return (
            <div>
                <div className="owner-form-title">
                    <h1 className="owner-form-title-text">Informações para disponibilização do veículo</h1>
                </div>
                <Forms sendData={this.sendData} buttonName="Cadastrar" inputList={formInputs}/>
            </div>
        )
    }




    render() {
        return(
            <div className="owner-register-container">
                {this.renderOwnerRegister()}
            </div>
        )
    }
    
    
    
    
}



export default OwnerRegister