import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
import './App.css';

class App extends Component {
  state = {
    tasks: [
      {
        taskName: 'Task 1',
        startDate: '2019-01-21',
        endDate: '2019-01-27',
      },
      {
        taskName: 'Task 2',
        startDate: '2019-02-18',
        endDate: '2019-03-03',
      },
      {
        taskName: 'Task 3',
        startDate: '2019-01-28',
        endDate: '2019-03-01',
      },
    ]
  }

  
  removeTask = index => {
    const { tasks } = this.state

    this.setState({
      tasks: tasks.filter((task, i) => {
        return i !== index
      })
    })
  }
  
  handleSubmit = task => {
    this.setState({ tasks: [...this.state.tasks, task] })
  }


  render() {
    const { tasks } = this.state
    
    return (
      <div className="container">
        <Table taskData={tasks} removeTask={this.removeTask} />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App;
