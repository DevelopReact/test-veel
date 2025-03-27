'use client';

//next
import Link from 'next/link';
// react
import { FC, useState } from 'react';
//ui
import { Button } from '@/shared/ui/Button/Button';

interface TodoFormProps {
  onSubmitAction: (todo: { title: string; completed: boolean }) => void;
}

export const TodoForm: FC<TodoFormProps> = ({ onSubmitAction }) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmitAction({
      title,
      completed
    });
    setTitle('');
  };

  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <Link href='/' className='hover:text-amber-500'>
        Back to home
      </Link>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 p-4 border rounded-lg'
      >
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter todo title'
          className='border p-2 rounded'
        />
        <label className='flex justify-start items-center gap-2'>
          completed:
          <input
            type='checkbox'
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </label>
        <Button type='submit'>Create Todo</Button>
      </form>
    </div>
  );
};
