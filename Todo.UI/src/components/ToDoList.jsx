import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {

    render() {
        const { todos, markTodoDone } = this.props;
        // TODOITEM RENDER EDECEGI ELEMENTI PROP OLARAK ALMALI
        return (
            <ol className="todos-list">
                {
                    todos.map((val, i) => <ToDoItem key={i} title={val.title} isDone={val.done} markTodoDone={(title) => markTodoDone(title)} />)
                }
            </ol>
        )
    }
}

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired),
    markTodoDone: PropTypes.func.isRequired,
}

export default ToDoList;
