import React from "react";
import PropType from 'prop-types';

class ToDoItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {title} = this.props;
        return <li>{title}</li>;
    }
}

ToDoItem.propTypes = {
    title: PropType.string.isRequired
}

export default ToDoItem