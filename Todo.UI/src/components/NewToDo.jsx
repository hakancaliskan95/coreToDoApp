import React from 'react';
import PropTypes from 'prop-types';

class NewToDo extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            todoItemName: ''
        }

        this._addTodoHandler = this._addTodoHandler.bind(this);
        this._onTodoItemNameChanged = this._onTodoItemNameChanged.bind(this);
    }

    _addTodoHandler() {
        
        //TODO DEĞERİ BOŞ OLMAMALI!
            let myRe = /^\s*$\s*/;
            if(!(this.state.todoItemName).match(myRe)){
                const { onTodoAdd } = this.props;
                onTodoAdd(this.state.todoItemName);
                this.setState({todoItemName: ''});
                
            }
        
    }
    

    _onTodoItemNameChanged(e) {
        this.setState({ todoItemName: e.target.value });
    }

    render() {
        return (
            <div className="test">
                <h1 className="main-title">To Do App</h1>
                <h2 className = "input-title">To do item</h2>
                <input className="input" type="text" placeholder="Type your task." value={this.state.todoItemName} onChange={this._onTodoItemNameChanged} /><br /><br />
                <button className="button" type="button" onClick={this._addTodoHandler}>Add item</button>
            </div>
        )
    }
}

NewToDo.propTypes = {
    onTodoAdd: PropTypes.func.isRequired
}

export default NewToDo