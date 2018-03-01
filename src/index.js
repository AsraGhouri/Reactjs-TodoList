import React from 'react';
import ReactDom from 'react-dom';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
class TodoList extends React.Component{
   constructor(){
       super();
       this.updateTask = this.updateTask.bind(this);
       this.addTask = this.addTask.bind(this);
       this.deleteTask = this.deleteTask.bind(this);
       this.editTask = this.editTask.bind(this);
       this.state={
           tasks:[{
               name:"Offer Prayer at 6'O clock"
           },
           {
               name:"Make Breakfast",
           },
           {
               name:"Do Home Chores"
           }],
           currentTask:''
       }
   }
   addTask(evt){
        evt.preventDefault();
        let tasks = this.state.tasks;
        let currentTask = this.state.currentTask;
        tasks.push({
            name:currentTask
        })
        this.setState({
            tasks
        })
   }
   editTask(){

   }
   deleteTask(index){
        console.log(index)
        let tasks = this.state.tasks;
        tasks.splice(index,1);
        this.setState({
            tasks
        })
   }
   updateTask(newValue){
        this.setState({
            currentTask: newValue.target.value
        })
   }
   editTask(index,newValue){
    var tasks = this.state.tasks;
    var task = tasks[index];
    task['name'] = newValue;
    this.setState({
        tasks
    })
}
    render(){
        return(
            <section>
                <TodoForm 
                            currentTask={this.state.currentTask}
                            updateTask={this.updateTask}
                            addTask={this.addTask}
                />
                <ul>
                    {this.state.tasks.map((task, index) => {
                     return <TodoItem 
                            key={index} 
                            details={task}
                            index={index}
                            deleteTask={this.deleteTask}
                            editTask={this.editTask}/>
                            })
                    }
                </ul>
            </section>
        );
    }
}
ReactDom.render(<TodoList/>,document.getElementById('root'));