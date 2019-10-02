import React, { Component } from 'react'

const TableHeader = () => {
    
    //TO-DO: siin võiks olla mingi kavalam viis, kuidas tabeli päis kokku pannakse
    // mõtle dünaamiliselt, et kui tegemist ei ole aasta esimese kvartaliga? või kui vaates oleks vaja näidata 4 kuud või 5 kuud?
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
function getWeekNumber(d){
    var dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
  }

const TableBody = props => {
    const rows = props.taskData.map((row, index) =>{
        row.startWeek = getWeekNumber(new Date(row.startDate));
        row.endWeek = getWeekNumber(new Date(row.endDate));

        let classCol = [];
        for(let i=0;i<13;i++){

            //TO-DO: siia vaja tingimust, millal lahter värvitakse
            // if(???){
            //     classCol.push("colored");    
            // }
            // else{
                classCol.push("nocolor");
            // }
        }

        return (
            <tr key={index}>
                <td>
                    <button onClick={() => props.removeTask(index)}>Delete</button>
                </td>
                <th>{row.taskName}</th>
                <td className="start">{FormatDate(row.startDate)}</td>
                <td className="end">{FormatDate(row.endDate)}</td>
                {classCol.map(className => {
                    return <td className={className}></td>
                })}
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