import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (todos.length === 0) {
    return (
      <div className="todo-list">
        <div className="empty-state">
          <p>Нет задач</p>
        </div>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoList;