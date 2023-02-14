import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AddItem } from './components/AddItem';
import { TodoList } from './components/TodoList';
import { Todo } from './models/Todo';
import { TodoListApp } from './components/TodoListApp';

function App() {

  return (
    <div className="App">
      <TodoListApp></TodoListApp>
    </div>
  );
}

export default App;
