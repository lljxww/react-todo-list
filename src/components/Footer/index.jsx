import React, {Component} from "react"
import './index.css'
import PropTypes from "prop-types";

export default class Footer extends Component {
    static propTypes = {
        doneCount: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        doneAll: PropTypes.func.isRequired,
        clearDone: PropTypes.func.isRequired
    }

    doneAll = (event) => {
        this.props.doneAll(event.target.checked)
    }

    render() {
        const {doneCount, total, clearDone} = this.props

        return (
            <div className="todo-footer">
                <label>
                    <input onChange={this.doneAll} type="checkbox" checked={doneCount === total && total !== 0}/>
                </label>
                <span>
                    <span>已完成 {doneCount}</span> / 全部 {total}
                </span>
                <button onClick={clearDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}