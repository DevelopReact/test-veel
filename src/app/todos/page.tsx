//next
import { Metadata } from 'next';
//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//ui
import { TodoList } from '@/entities/todo/ui/TodoList';
//types
import type { Todo } from '@/entities/todo/model/types/todoTypes';

export const metadata: Metadata = {
  title: 'todos'
};

export default async function Todo() {
  const response = await fetch(`${jsonPlaceholderAPI}/?_limit=10`);
  const todos: Todo[] = await response.json();

  return (
    <div className='flex justify-center items-center h-screen'>
      <TodoList todos={todos} />
    </div>
  );
}
