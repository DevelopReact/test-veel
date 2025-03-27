'use client';
// react
import { FC } from 'react';
//types
import { Todo } from '../model/types/todoTypes';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <p>
        Todo {todo.id}: {todo.title}
      </p>
    </div>
  );
};
