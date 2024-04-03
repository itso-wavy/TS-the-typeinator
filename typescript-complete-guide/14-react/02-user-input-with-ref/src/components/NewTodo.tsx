import { useRef } from 'react';

const NewTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = inputRef.current!.value;
    console.log('enteredText: ', enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor='todo-text'>Todo Text</label>
        <input type='text' id='todo-text' ref={inputRef} />
      </div>
      <button type='submit'>ADD TODO</button>
    </form>
  );
};

export default NewTodo;

/* 


 */
