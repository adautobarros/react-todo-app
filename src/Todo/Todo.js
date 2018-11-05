import React, { Component } from 'react'

import Form from './Form';
import List from './List';

import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      itens: []
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        itens: [{ description: "teste 1", complete: false }, { description: "teste 2", complete: false }]
      });
    }, 1000)
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onAdd = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      itens: [...this.state.itens, { description: this.state.term, complete: false }]
    });
  }

  onRemove = (valor) => {
    this.setState({
      itens: this.state.itens.filter((item) => item.description !== valor.description)
    })
  }

  render() {
    return (
      <main class="main columns">
        <section class="column">
          <Form onSubmit={this.onAdd} onChange={this.onChange} term={this.state.term} />
          <List itens={this.state.itens} onRemove={this.onRemove} />
        </section>
      </main>
    );
  }
}

export default Todo;