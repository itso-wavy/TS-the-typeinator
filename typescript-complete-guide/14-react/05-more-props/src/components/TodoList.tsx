import { Todo } from '../todo.model';

interface TodoListProps {
  items: Todo[];
  onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.text}
          <button onClick={onDeleteTodo.bind(null, item.id)}>del</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
