import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {

    render() {
        const { todos } = this.props;
        // TODOITEM RENDER EDECEGI ELEMENTI PROP OLARAK ALMALI
        return (
            <ol>
                {
                    todos.map((val, i) => <ToDoItem key={i} title={val.title} />)
                }
            </ol>
        )
    }
}

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired)
}

export default ToDoList