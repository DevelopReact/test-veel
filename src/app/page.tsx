//next
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center gap-10 h-screen'>
      <Link href='/todos' className='hover:text-amber-500'>
        Get todo list
      </Link>
      <Link href='/create' className='hover:text-amber-500'>
        Create todo
      </Link>
    </div>
  );
}
