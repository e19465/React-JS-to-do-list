import './css/Todo.css'

const TodoItems = ({handleDelete, todo}) => {
  return (
    <li className='Todo-list-ul-li' key={todo.id}>
        <div className="text">{todo.text}</div>
        <div className="due-date-delete">
            <div className='date'>{todo.date}</div>
            <button onClick={()=>handleDelete(todo.id)} className='delete'>Delete</button>
        </div>
    </li>
  )
}

export default TodoItems