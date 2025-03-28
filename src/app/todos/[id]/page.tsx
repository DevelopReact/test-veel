//next
import { Metadata } from 'next';
//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//ui
import { TodoItem } from '@/entities/todo/ui/TodoItem';
//types
import type { Todo } from '@/entities/todo/model/types/todoTypes';

import { TodoDelete } from '@/entities/todo/ui/TodoDelete';

export const dynamic = 'force-dynamic';

async function getTodoById(id: number) {
  const response = await fetch(`${jsonPlaceholderAPI}/${id}`, {
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error('Failed to fetch todo');
  }

  return response.json();
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getTodoById(Number(id));

  return {
    title: post.title
  };
}

export default async function TodoDetailPage({ params }: Props) {
  const { id } = await params;
  const todo = await getTodoById(Number(id));

  if (!todo) {
    return (
      <div className='flex flex-col gap-5 justify-center items-center h-screen'>
        <p className='text-red-500'>Todo not found</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-5 justify-center items-center h-screen'>
      <TodoItem todo={todo} />
      <TodoDelete todoId={todo.id} />
    </div>
  );
}
