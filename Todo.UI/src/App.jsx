import React, { Fragment } from 'react'
import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import ToDoItem from './components/ToDoItem';

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            todos: []
        }

        this._onTodoAddHandler = this._onTodoAddHandler.bind(this);
        //this.removeItem = this.removeItem.bind(this);
        this.markTodoDone = this.markTodoDone.bind(this);


    }



    _onTodoAddHandler(todoName) {

        //AYNI TODO SADECE BİR KEZ EKLENMELİ!
        const dupes = this.state.todos.filter(v => {
            return v.title === todoName;
        });

        if (dupes.length <= 0) {
            console.log("Bu kayıt yok" );
            let todos = this.state.todos;
            const { count } = this.state;
            todos.push({ id: 1, title: todoName });
            this.setState({ todos, count: count + 1 });
        }
        else {
            console.log("Bu kayıt var");
        }
    }

    markTodoDone(title) {
        const { todos: todoList, count } = this.state;
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].title === title) {
                todoList[i].done = true;
                break;
            }
        }

        this.setState({ todos: todoList, count: count - 1 });

    }




    render() {
        return (
            <Fragment>
                <NewToDo onTodoAdd={this._onTodoAddHandler} />
                <ToDoList todos={this.state.todos} markTodoDone={this.markTodoDone} />
            </Fragment>
        )
    }
}

export default App