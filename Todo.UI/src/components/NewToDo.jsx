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
            <div>
            <div className = "menu">
                <ul class="navi-menu">
                    <li><a href="#notes" class="active">All Notes</a></li>
                    <li><a href="#personal">Personal</a></li>
                    <li class="dropdown">
	                    <a href="#javascript:void(0)" class="dropbtn">Contact</a>
		                        <div class="dropdown-content">
			                        <a href="#">Email us</a>
			                        <a href="#">Call us</a>
			                        <a href="#">Address</a>
		                        </div>
                    </li>
                    <li><a href="about">About</a></li>
                </ul>
            <div className="test">
                <h1 className="main-title">To Do App</h1>
                <h2 className = "input-title">To do item</h2>
                <input className="input" type="text" placeholder="Type your task." value={this.state.todoItemName} onChange={this._onTodoItemNameChanged} /><br /><br />
                <button className="button" type="button" onClick={this._addTodoHandler}>Add item</button>
            </div>
            </div>
            </div>
        )
    }
}

NewToDo.propTypes = {
    onTodoAdd: PropTypes.func.isRequired
}

export default NewToDo