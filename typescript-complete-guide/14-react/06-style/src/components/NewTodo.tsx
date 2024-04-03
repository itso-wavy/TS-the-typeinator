import { useRef } from 'react';
import './NewTodo.css';

type NewTodoProps = { onAddTodo: (text: string) => void };

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = inputRef.current!.value;
    onAddTodo(enteredText);
    inputRef.current!.value = '';
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='todo-text'>Todo Text</label>
        <input type='text' id='todo-text' ref={inputRef} />
      </div>
      <button type='submit'>ADD TODO</button>
    </form>
  );
};

export default NewTodo;
