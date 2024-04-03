import { useRef } from 'react';

type NewTodoProps = { onAddTodo: (text: string) => void };

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = inputRef.current!.value;
    onAddTodo(enteredText);
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
