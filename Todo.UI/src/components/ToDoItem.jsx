import React from "react";
import PropTypes from 'prop-types';

class ToDoItem extends React.Component {

    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead() {

        this.props.markTodoDone(this.props.title);
    }

    render() {
        const { title, isDone } = this.props;
        return (
            <li className="todos-item">
                {title}  {isDone ? <div className="done">{title}</div> : ''}
                
                <a href="/#" onClick={this.markAsRead}>
                    <input type="button" value="✓" className="done-btn" />
                </a>
            </li>
        );
    }
}

ToDoItem.propTypes = {
    title: PropTypes.string.isRequired,
    markTodoDone: PropTypes.func.isRequired,
    isDone: PropTypes.bool,
}

export default ToDoItem;
