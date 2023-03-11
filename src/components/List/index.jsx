import React, {Component} from 'react'
import Item from "../Item"
import './index.css'
import PropTypes from "prop-types";

export default class List extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        operateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    render() {
        const {todos, operateTodo, deleteTodo} = this.props

        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} {...todo} operateTodo={operateTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}