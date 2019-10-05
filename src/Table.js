import React, { Component } from 'react'

const TableHeader = () => {
    
    //TO-DO: siin võiks olla mingi kavalam viis, kuidas tabeli päis kokku pannakse
    // mõtle dünaamiliselt, et kui tegemist ei ole aasta esimese kvartaliga? või kui vaates oleks vaja näidata 4 kuud või 5 kuud?
     const months = ['', 'Jan', 'Feb', 'Mar'];
     
     //For colspan
     function span(month){
        if(month === '' || month === 'Feb'){
            return "4"
        }
        else{
            return '5'
        }
    } 
   
    let weekNumbers = [];
     for(let i = 1; i <= 13; i++){
        weekNumbers[i - 1] = weekNumbers.push(i);
    }
    
    return (
        
    <thead>
      <tr>
        { months.map(month => <th colSpan={span(month)}>{month}</th> )}
      </tr>
      <tr>
        <td></td>
        <th scope="col">Task Name</th>
        <th scope="col">Start Date</th>
        <th scope="col">End Date</th>
        {weekNumbers.map(weekNumber => <th scope="col">{weekNumber}</th>)}
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
function getYear(d){
    let startYear = d.getUTCFullYear();
    return startYear
}
const TableBody = props => {
    const rows = props.taskData.map((row, index) =>{
        row.startWeek = getWeekNumber(new Date(row.startDate));
        row.endWeek = getWeekNumber(new Date(row.endDate));
        row.startYear = getYear(new Date(row.startDate));
        console.log(row.startYear);
        let classCol = [];

        for(let i=1;i<=13;i++){
            //TO-DO: siia vaja tingimust, millal lahter värvitakse
            //Done 
            if(row.startYear === 2019 && i >= row.startWeek && i <= row.endWeek || row.startYear < 2019 && i <= row.endWeek){
                classCol.push("colored");    
                
            }
            else{
                classCol.push("nocolor");
            }
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