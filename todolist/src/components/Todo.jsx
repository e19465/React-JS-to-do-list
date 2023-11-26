import { useState, useEffect } from 'react'
import './css/Todo.css'
import { format } from 'date-fns';
import TodoList from './TodoList';

const Todo = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todosList')) || []);
    const [item, setItem] = useState('');


    useEffect(()=>{
        localStorage.setItem('todosList',JSON.stringify(todos));
    }, [todos])


    const addTodos = (e) => {
        const datetime = format(new Date(), 'yyyy/MM/dd pp')
        e.preventDefault();
        const id = todos.length ? todos[todos.length -1].id + 1: 1;
        const newItem = {id: id, date: datetime, text: item }
        setTodos([...todos, newItem ]);
        setItem("");
        localStorage.setItem('todosList', JSON.stringify(todos.reverse()));
    }

    const handleDelete = (id) => {
        const newItems = todos.filter((todo) => todo.id !== id);
        setTodos(newItems);
        localStorage.setItem('todosList', JSON.stringify(newItems.reverse()));
    }

  return (
    <div className='Todo'>
        <h2 className="Todo-header">To-Do List</h2>
        <form className='Todo-form' onSubmit={addTodos}>
            <input 
            type="text" 
            placeholder='Add items...' 
            className='Todo-input' 
            required
            value={item}
            onChange={(e) => setItem(e.target.value)}
            />
            <button className='Todo-btn' type="submit">ADD</button>
        </form>
        <div className="Todo-list">
            <TodoList todos={todos} handleDelete={handleDelete}/>
        </div>
    </div>
  )
}

export default Todo