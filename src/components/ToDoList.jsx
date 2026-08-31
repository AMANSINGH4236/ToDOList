import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4">
        No tasks available. Add a new task above!
      </p>
    );
  }

  return (
    <ul className="mt-4">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;