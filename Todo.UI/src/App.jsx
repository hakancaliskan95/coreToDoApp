import React, { Fragment } from 'react'
import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import ToDoItem from './components/ToDoItem';

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }

        this._onTodoAddHandler = this._onTodoAddHandler.bind(this);
    }

    _onTodoAddHandler(todoName) {

        //AYNI TODO SADECE BİR KEZ EKLENMELİ!
            const dupes = this.state.todos.filter(v =>{
                return v.title === todoName;
            });

            if(dupes.length <= 0){
                console.log("Bu kayıt yok");
                let todos = this.state.todos;
                todos.push({ id: 1, title: todoName });   
                this.setState({ todos });   
            }
            else{
                console.log("Bu kayıt var");
            }
    }

    render() {
        return (
            <Fragment>
                <NewToDo onTodoAdd={this._onTodoAddHandler} />
                <ToDoList todos={this.state.todos} />
            </Fragment>
        )
    }
}

export default App