import { useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    const newTodos = todos.concat(newTodo);
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          id: todo.id,
          text: todo.text,
          completed: !todo.completed
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter(todo => {
      return todo.id !== id;
    });
    setTodos(filteredTodos);
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <TodoForm addTodo={addTodo} />
        <TodoList 
          todos={todos} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo} 
        />
      </div>
    </div>
  );
}

export default App;