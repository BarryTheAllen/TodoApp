import './TodoItem.css';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="todo-checkbox"
        />
        <span className="todo-text">{todo.text}</span>
      </div>
      <button onClick={handleDelete} className="delete-button">
        ×
      </button>
    </div>
  );
}

export default TodoItem;