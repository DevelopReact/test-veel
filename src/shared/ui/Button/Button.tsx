// react
import { FC, ReactNode } from 'react';
//classnames
import classNames from 'classnames';

interface ButtonProps {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => Promise<void>;
}

export const Button: FC<ButtonProps> = ({ children, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames('px-4 py-3 rounded-lg', {
        'bg-indigo-600 text-white cursor-pointer': type === 'button',
        'bg-blue-500  text-white cursor-pointer': type === 'submit',
        'bg-pink-600 text-white cursor-pointer': type === 'reset'
      })}
    >
      {children}
    </button>
  );
};
