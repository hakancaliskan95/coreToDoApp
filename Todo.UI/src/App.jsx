import React, { Fragment } from 'react'
import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';

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

        let todos = this.state.todos;
        todos.push({ id: 1, title: todoName });

        this.setState({ todos });
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