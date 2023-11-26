import React from 'react'
import TodoItems from './TodoItems'

const TodoList = ({todos, handleDelete}) => {
  return (
    <ul className='Todo-list-ul'>
        {todos.map((todo) => (
            <TodoItems key={todo.id} todo={todo} handleDelete={handleDelete}/>
        ))}
    </ul>
  )
}

export default TodoList