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
    render() {
        const { taskName, startDate, endDate } = this.state;
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
                    min="2019-01-01"
                    max="2019-03-30"
                    required
                    value={startDate}
                    onChange={this.handleChange} />
                <input 
                    type="date"
                    name="endDate"
                    min="2019-01-01"
                    max="2019-03-30"
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