import React, { Component } from "react";

import ToDoListItem from "./components/toDoListItem";

class App extends Component {
  state = {
    todoListTitle: "My Todo List",
    todos: ["Walk to latea", "Get boba"]
  };

  remove = () => {
    this.setState({
      todos: [],
      todoListTitle: []
    })
  };

  render() {
    return (
      <div>
        <h1>{this.state.todoListTitle}</h1>
        {this.state.todos.map(x => (
          <ToDoListItem todo={x} />
        ))}
        <button onClick={this.remove}> remove</button>
      </div>
    );
  }
}

export default App;
