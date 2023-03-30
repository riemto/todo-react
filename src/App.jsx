import { useState } from 'react'
import TodoList from './components/TodoList'
import './App.css'
import AddTodo from './components/AddTodo'
import useTodos from './hooks/useTodos'

function App() {
  const { todos, addTodo, deleteTodo } = useTodos();

  return (
    <div className="App">
      <AddTodo add={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
