import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Add , Edit , Delete } from '@material-ui/icons';


class ListToDoTasks extends React.Component {
    constructor() {
        super();
        this.state = {
            toDoListTasks : [],
            editableId : 0,
            backUpTaskName : ''
        };
    }
    componentDidMount() {
        
    }
    // create a new task
    createNewTask() {
        // a new set of task data 
        let newTask = {
            id : this.state.toDoListTasks.length + 1,
            taskName : ""
        }
        let taskList = this.state.toDoListTasks;
        taskList.push(newTask)

        // set the new task data in already available array
        this.setState({ 
            toDoListTasks: taskList,
            editableId : this.state.toDoListTasks.length,
            backUpTaskName : ''
        })
        
    }

    // edit task
    editTask(currentId , taskName) {
        this.setState( {
            editableId : currentId,
            backUpTaskName : taskName
        })
    }

    deleteTask(index) {
        let taskData = this.state.toDoListTasks;
        taskData.splice(index, 1);

        this.setState({
            toDoListTasks : taskData,
            editableId : 0
        })
    }

    saveTask() {
        this.setState( {
            editableId : 0
        })
    }

    cancelSave(index , itemId) {
        let newEditedTask = {
            id : itemId,
            taskName : this.state.backUpTaskName
        }
        
        let taskData = this.state.toDoListTasks;
        taskData.splice(index , 1 , newEditedTask);
        this.setState({
            toDoListTasks : taskData,
            editableId : 0
        })

    }

    // when task Name is changed
    changeTaskName(e, index , itemId) {
        // set the changing value in to the array
        let newEditedTask = {
            id : itemId,
            taskName : e.target.value
        }

        let taskData = this.state.toDoListTasks;
        taskData.splice(index , 1 , newEditedTask);

        this.setState({
            toDoListTasks : taskData
        })
    }

    
    render() {
        return (
            <div>
                <Button onClick={() => this.createNewTask()} className="newTaskBtn" color="primary"><Add></Add>New Task</Button>
                {this.state.toDoListTasks.length ? 
                    <div>
                    {this.state.toDoListTasks.map((item , index) => (
                        <div className="toDoTaskLists" key={index}>
                            <Card className="toDoListCard">
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <div className="toDoListTitle">
                                            Task
                                        </div>
                                        {this.state.editableId && this.state.editableId === item.id ? 
                                            <TextField label="Task Name" value={item.taskName} onChange={(e)=>this.changeTaskName(e , index , item.id)}/>
                                        :
                                            <div>
                                                {item.taskName ? item.taskName : '----'}
                                            </div>
                                        }
                                        
                                    </Grid>
                                    <Grid item xs={6} className="toDoListActionsContainer">
                                        {this.state.editableId && this.state.editableId === item.id ? 
                                        <div>
                                            <Button className="toDoListActions" variant="contained" onClick={()=>this.cancelSave(index , item.id)}>Cancel</Button>
                                            <Button variant="contained" color="primary" onClick={()=>this.saveTask(index)}>Save</Button>
                                        </div>
                                        : 
                                        <div className="toDoListActions">
                                            <Edit style={{cursor:'pointer'}} className="toDoListActions" onClick={() => this.editTask(item.id , item.taskName)}></Edit>
                                            <Delete style={{cursor:'pointer'}} onClick={() => this.deleteTask(index)}></Delete>
                                        </div>
                                        }
                                    </Grid>
                                </Grid>
                            </Card>
                        </div>
                    ))}
                    </div>
                : <div >
                    <div className="toDoTaskLists">
                        <img src={require("../assets/no-records.png")}/>
                    </div>
                    <div className="toDoTaskLists">
                        No ToDos created yet
                    </div>
                  </div>
                }
                
            </div>
        )
    }
}


export default ListToDoTasks;