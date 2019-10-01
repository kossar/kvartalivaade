import React, { Component } from 'react'

const TableHeader = () => {
    
    return (
    <thead>
      <tr>
        <td colSpan="4"></td>
        <th colSpan="5">Jan</th>
        <th colSpan="4">Feb</th>
        <th colSpan="5">Mar</th>
      </tr>
      <tr>
        <td></td>
        <th scope="col">Task Name</th>
        <th scope="col">Start Date</th>
        <th scope="col">End Date</th>
        <th scope="col">1</th>
        <th scope="col">2</th>
        <th scope="col">3</th>
        <th scope="col">4</th>
        <th scope="col">5</th>
        <th scope="col">6</th>
        <th scope="col">7</th>
        <th scope="col">8</th>
        <th scope="col">9</th>
        <th scope="col">10</th>
        <th scope="col">11</th>
        <th scope="col">12</th>
        <th scope="col">13</th>
      </tr>
    </thead>
    )
}
function FormatDate(oldDate) {
        let newDate = oldDate.toString().split('-').reverse().join('-');
    return newDate.replace(/-/g, '.');
}

const TableBody = props => {
    const rows = props.taskData.map((row, index) =>{
        
        return (
            <tr key={index}>
                <td>
                    <button onClick={() => props.removeTask(index)}>Delete</button>
                </td>
                <th>{row.taskName}</th>
                <td className="start">{FormatDate(row.startDate)}</td>
                <td className="end">{FormatDate(row.endDate)}</td>
                <td>{row.one}</td>
                <td>{row.two}</td>
                <td>{row.three}</td>
                <td>{row.four}</td>
                <td>{row.five}</td>
                <td>{row.six}</td>
                <td>{row.seven}</td>
                <td>{row.eight}</td>
                <td>{row.nine}</td>
                <td>{row.ten}</td>
                <td>{row.eleven}</td>
                <td>{row.twelve}</td>
                <td>{row.thirteen}</td>
            </tr>
        )
    })

    return (
        <tbody>{rows}</tbody>
    )
}

class Table extends Component {
    render() {
        const { taskData, removeTask } = this.props
        return(
            <table>
                <TableHeader />
                <TableBody taskData={taskData} removeTask={removeTask}  />
            </table>
        );
    }
}

export default Table