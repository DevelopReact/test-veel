'use client';

//next
import { useRouter } from 'next/navigation';
//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//ui
import { TodoForm } from '@/entities/todo/ui/TodoForm';

export default function CreateTodoPage() {
  const router = useRouter();

  const createTodo = async ({
    title,
    completed
  }: {
    title: string;
    completed: boolean;
  }) => {
    try {
      const response = await fetch(jsonPlaceholderAPI, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          completed
        })
      });

      if (!response.ok) throw new Error('Failed to create todo');

      router.push('/todos');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <TodoForm onSubmitAction={createTodo} />
    </div>
  );
}
