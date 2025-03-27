'use client';

//next
import { useRouter } from 'next/navigation';
//react
import { FC } from 'react';
// api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//ui
import { Button } from '@/shared/ui/Button/Button';

interface TodoDeleteProps {
  todoId: number;
}

export const TodoDelete: FC<TodoDeleteProps> = ({ todoId }) => {
  const router = useRouter();

  const deleteTodo = async () => {
    try {
      const response = await fetch(`${jsonPlaceholderAPI}/${todoId}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Failed to delete todo');

      router.push('/todos');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button type='button' onClick={deleteTodo}>
      Delete
    </Button>
  );
};
