import './App.css';
import React, { Component } from 'react';
import TodoItem from './compoinents/TodoItem'
import checkAllImg from './images/check-all.svg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      newText: '',
      todoItems: [
        { title: 'Đi ngủ', isComplete: true },
        { title: 'Đi ỉa', isComplete: true },
        { title: 'Đi câu cá', isComplete: false },
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onItemClick(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      this.setState({
        todoItems: todoItems.map(todo =>
          todo !== item ? { ...todo } : { ...todo, isComplete: !todo.isComplete }
        )
      });
    }
  }
  onKeyUp(e) {
    if (e.keyCode === 13) {
      let text = e.target.value;
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) return;

      this.setState({
        newText: '',
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems
        ]
      })
    }
  }
  onChange(e) {
    this.setState({
      newText: e.target.value
    })
  }
  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">

        <div className="header">
          <img src={checkAllImg} alt="" width="40px" />
          <input
            type="text"
            placeholder="Write todo..."
            value={this.state.newText}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp} />
        </div>
        {
          todoItems.length && todoItems.map((item, index) =>
            <TodoItem key={index} item={item} onClick={this.onItemClick(item)} />
          )
        }

      </div>
    );
  }
}

export default App;
