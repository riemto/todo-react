import React, { useState } from 'react'
import Todo from './Todo'

function TodoList({ todos, deleteTodo }) {
    return (
        <div>
            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    task={todo.task}
                    completed={todo.completed}
                    onDelete={() => deleteTodo(todo._id)}
                />
            ))}
        </div>
    )
}

export default TodoList