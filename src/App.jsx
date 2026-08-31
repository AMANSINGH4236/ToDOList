import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTaskInput('');
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-md mx-auto mt-8 p-4 bg-white rounded-xl shadow-md">
        <form onSubmit={addTodo} className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Add a new task..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </form>

        <ToDoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </main>
    </div>
  );
}

export default App;