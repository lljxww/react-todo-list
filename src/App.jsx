import React, {Component} from 'react'
import Header from './components/Header'
import List from './components/List'
import './App.css'
import Footer from "./components/Footer";

export default class App extends Component {
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '打代码', done: false}
        ]
    }

    addTodo = (todoObj) => {
        const {todos} = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({todos: newTodos})
    }

    operateTodo = (id, done) => {
        const {todos} = this.state
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, done: done}
            } else {
                return todo
            }
        })

        this.setState({todos: newTodos})
    }

    deleteTodo = (id) => {
        const {todos} = this.state
        const newTodos = todos.filter((todo) => todo.id !== id)

        this.setState({todos: newTodos})
    }

    doneAll = (done) => {
        const {todos} = this.state
        const newTodos = todos.map((todo) => {
            return {...todo, done: done}
        })

        this.setState({todos: newTodos})
    }

    getDoneCount = () => {
        return this.state.todos.reduce((pre, current) => current.done ? pre + 1 : pre, 0)
    }

    clearDone = () => {
        const newTodos = this.state.todos.filter((todo) => !todo.done)
        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state

        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} operateTodo={this.operateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer doneCount={this.getDoneCount()}
                            total={this.state.todos.length}
                            doneAll={this.doneAll}
                            clearDone={this.clearDone}/>
                </div>
            </div>
        )
    }
}
