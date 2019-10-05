import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.initialState = {
            taskName: '',
            startDate: '',
            endDate: '',
        }
    
    this.state = this.initialState
    }

    handleChange = event => {
        const { name, value } = event.target
            this.setState({
                [name]: value,
              })
        }
    
    
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    /*
    Proovisin seda teha, aga ilmselt vale lähenemine, pean hetkel kooliasjadele keskenduma ja pole aega sellega tegeleda.
    Tahtsin et onclick kutsuks selle funktsiooni välja ja kui kõik väljad on täidetud ja algus kuupäev väiksem lõpu omast
    siis submitiks. Rohkem ei jõua kahjuks teha hetkel. 

    formValidation = () => {
        if(this.taskName === '' ){
            return alert('Please check fields');
        }
        else {
            this.submitForm();
        } 
    }*/

    render() {
        const { taskName, startDate, endDate } = this.state;
        //TO-DO: ära piira siin kuupäeva sisestamise valikuid. Tabel peaks suutma kuvada ka taske, mis antud kvartalisse ei mahu või mahuvad osaliselt
        // Done
        return (
            <form>
                <label>Add new task:</label>
                <input
                    type="text"
                    name="taskName"
                    required
                    value={taskName}
                    onChange={this.handleChange} />
                <input 
                    type="date"
                    name="startDate"
                    required
                    value={startDate}
                    onChange={this.handleChange} />
                <input 
                    type="date"
                    name="endDate"
                    required
                    value={endDate}
                    onChange={this.handleChange} />
                <input  
                    type="button" 
                    value="Add" 
                    onClick={this.submitForm} 
                />
            </form>
        )
    }
}
export default Form