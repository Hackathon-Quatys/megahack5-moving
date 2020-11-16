import React from 'react';
import PerfilModal from './PerfilModal'
import db from '../FirestoreConnection'
import '../style/login.css'

class Find extends React.Component {

    constructor(props)  {
        super(props)
        this.state = {
            data: [],
            position: 0,
            mounted: false,
            actualOwner: {}
        }
        this.moveData = this.moveData.bind(this)
    }

    async componentDidMount() {
        if (!this.state.mounted){
            console.log('olha eu aqui')
            await this.findData()
            console.log(this.state)
            this.setState({mounted: true})
        }
        
    }

    async findData() {
        const data = []
        var query = await db.collection("routines").where("city", "==", this.props.params.locationInfo).get()
        query.forEach(item => {
            console.log('item', item.data())
            data.push(item.data())
        })
        if(this.state.data.length !== 0){
            const routine = data[0]
            console.log(routine)
            var ownerRef = await db.collection("users").doc(routine.ownerID).get()
            const owner = ownerRef.data()
            await this.setState({
                actualOwner: owner
            })
        }

        this.setState({
            data: data
        })
    }

    async moveData() {
        var position = this.state.position + 1
        if(position === this.state.data.length){
            console.log('entrei no if')
            position = 0
        } 
        console.log(position)
        const routine = this.state.data[position]
        console.log(routine)
        var ownerRef = await db.collection("users").doc(routine.ownerID).get()
        const owner = ownerRef.data()
        await this.setState({
            actualOwner: owner,
            position: position
        })

    }

    buildModal() {
        if(this.state.data.length === 0){
            return (
                <h1 className="no-cars">Sem carros disponíveis na sua localização</h1>
            )
        }
        const routine = this.state.data[this.state.position]
        console.log("modalRoutine", routine)
        return (
            <PerfilModal
                title="Veículo Disponível"
                imageURL={this.state.actualOwner.photo}
                name={this.state.actualOwner.name}
                buttonType="YesNoButtonFind"
                routineID={this.state.actualOwner.routine_created}
                locatorID={this.props.user}
                moveData={this.moveData}
            />
        )
    }
        
    render() {
        return(
            <div className="find">
                {this.state.mounted? this.buildModal():<h1>loading</h1>}
            </div>
            
        )
    }
}

export default Find