import React from 'react';

class Forms extends React.Component {

    constructor(props)  {
        super(props)
        this.state = {}

        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendData = this.sendData.bind(this);
    }

    async handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        await this.setState({[name]: value});
        console.log(this.state)
    }

    createForm() {

        const listInputs = this.props.inputList.map(input => {
            return(
                <div className="input-div" key={input.name}>
                    <h3>{input.text}</h3>
                    <input type={input.type} className={input.className} name={input.name} placeholder={input.placeholder} value={this.state[input.name] || ''} onChange={this.handleInputChange}/>
                </div>
            )
        })

        return (
            <div>
                <form>
                    {listInputs}
                </form>
            </div>
        )
    }
    
    sendData() {
        this.props.sendData(this.state);
    }
    
    render() {
        return(
            <div className="form-builder">
                {this.createForm()}
                <button className="send-button" onClick={this.sendData}>
                    {this.props.buttonName}
                </button>
            </div>
        )
    }
}

export default Forms