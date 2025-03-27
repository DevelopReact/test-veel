'use client';

//next
import Link from 'next/link';
// react
import { FC } from 'react';
//ui
import { TodoItem } from './TodoItem';
//types
import { Todo } from '../model/types/todoTypes';

interface TodoListProps {
  todos: Todo[];
}

export const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-10 '>
      <Link href='/' className='hover:text-amber-500'>
        Back to home
      </Link>
      <ul className='flex flex-col gap-5'>
        {todos?.map((todo, index) => (
          <Link
            href={`/todos/${todo.id}`}
            key={todo.id && index}
            className='hover:text-amber-500'
          >
            <TodoItem todo={todo} />
          </Link>
        ))}
      </ul>
    </div>
  );
};
