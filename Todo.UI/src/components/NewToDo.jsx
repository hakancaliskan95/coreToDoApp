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
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }



    _addTodoHandler() {

        //TODO DEĞERİ BOŞ OLMAMALI!
        let myRe = /^\s*$\s*/;
        if (!(this.state.todoItemName).match(myRe)) {
            const { onTodoAdd } = this.props;
            onTodoAdd(this.state.todoItemName);
            this.setState({ todoItemName: ''});

        }

    }
    _handleKeyPress(e) {
        if (e.keycode === 13 || e.which === 13) {
            this._addTodoHandler();
        }
    }


    _onTodoItemNameChanged(e) {
        this.setState({ todoItemName: e.target.value });
    }

    

    render() {
        return (
            <div className="test">
                <h1 className="main-title">To-Do App!</h1>
                <h2 className="input-title">Add New To-Do</h2>
                <h3>Count: {this.state.count}</h3>
                <input className="input" type="text" placeholder="Type your task." value={this.state.todoItemName} onChange={this._onTodoItemNameChanged} onKeyPress={this._handleKeyPress} /><br /><br />
                <button className="button" type="button" onClick={this._addTodoHandler}><h3 className="add-item">Add item</h3></button>
            </div>
        )
    }
}

NewToDo.propTypes = {
    onTodoAdd: PropTypes.func.isRequired
}

export default NewToDo