import React from 'react';

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            editing : false
        }
        this.renderForm = this.renderForm.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.updateItem = this.updateItem.bind(this);
        }
        toggleState(){
            const editing = this.state.editing;
            this.setState({
                editing: !editing
            })
        }
        updateItem(evt){
            evt.preventDefault();
            this.props.editTask(this.props.index, this.input.value);
            this.toggleState();
        }
        renderForm(){
            return(
                <form onSubmit={this.updateItem}>
                <input type="text" ref={(value)=>{
                    this.input = value
                }} defaultValue={this.props.details.name}/>
                <button type="Submit">Update</button>
            </form>
            )
        }
        renderItem(){
            return(
            <li>
               {this.props.details.name}
               <button onClick={(evt) =>this.props.deleteTask(this.props.index)}>Delete</button>
               <button onClick={(evt) =>this.toggleState()}>Edit</button>
            </li>
            )
        }
    render(){
        const editing = this.state.editing;
        return(
            <section>
                { editing ? this.renderForm() : this.renderItem()
                }
            </section>
        );
    }
}
// const TodoItem = (props) =>{
//         return(
//             <li>
//                {props.details.name}
//                <button onClick={props.deleteTask}>Delete</button>
//                <button onclick={}>Edit</button>
//             </li>
//         );
//     }
export default TodoItem