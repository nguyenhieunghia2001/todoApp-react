import './App.css';
import React, { Component } from 'react';
import TodoItem from './compoinents/TodoItem'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: 'Đi ngủ', isComplete: true },
        { title: 'Đi ỉa', isComplete: true },
        { title: 'Đi câu cá', isComplete: false },
      ]
    }
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
  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
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
