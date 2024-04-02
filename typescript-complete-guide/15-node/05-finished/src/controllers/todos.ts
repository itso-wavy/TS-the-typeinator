import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

const TODOS: Todo[] = [
  {
    id: '0.918848392033182',
    text: '😁',
  },
  {
    id: '0.19377385358566257',
    text: '😋',
  },
];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: 'Created the todo.', createdTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS });
};

export const updateTodos: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const updatedText = (req.body as { text: string }).text;

  const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error('Could not find todo!');
  }

  TODOS[todoIndex] = new Todo(todoId, updatedText);

  res.json({ message: 'Todo updated!', updatedTodo: TODOS[todoIndex] });
};

export const deleteTodos: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;

  const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error('Could not find todo!');
  }

  TODOS.splice(todoIndex, 1);

  res.json({ message: 'Todo deleted!' });
};
