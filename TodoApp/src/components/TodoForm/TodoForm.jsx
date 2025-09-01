import { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Добавьте новую задачу"
          className="todo-input"
        />
        <button type="submit" className="add-button">
          Добавить
        </button>
      </div>
    </form>
  );
}

export default TodoForm;