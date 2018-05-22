import React from 'react';
import TodoScreen from './src/screens/TodoScreen'

export default class App extends React.Component {
  render() {
    const todos = [
      {id: "1", todoText: "Learn React", isDone: false},
      {id: "2", todoText: "Learn Redux", isDone: false},
      {id: "3", todoText: "Learn React Native", isDone: false},
    ];

    return (
      <TodoScreen todos={todos}/>
    );
  }
}

