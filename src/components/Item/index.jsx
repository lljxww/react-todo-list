import React, {Component} from "react"
import './index.css'
import PropTypes from "prop-types";

export default class Item extends Component {
    static propTypes = {
        operateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    state = {mouse: false}

    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    handleCheck = (id) => {
        return (event) => {
            this.props.operateTodo(id, event.target.checked)
        }
    }

    handleDelete = (id) => {
        return () => {
            if (window.confirm('确定删除吗？')) {
                this.props.deleteTodo(id)
            }
        }
    }

    render() {
        const {id, name, done} = this.props

        return (
            <li style={{backgroundColor: this.state.mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete(id)} className="btn btn-danger"
                        style={{display: this.state.mouse ? 'block' : 'none'}}>删除
                </button>
            </li>
        )
    }
}