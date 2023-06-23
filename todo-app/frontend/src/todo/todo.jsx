import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader.jsx'
import TodoForm from './todoForm.jsx'
import TodoList from './todoList.jsx'

const URL = 'https://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => console.log('Funcionou!'))
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange} />
                <TodoList />
            </div>
        )
    }
}