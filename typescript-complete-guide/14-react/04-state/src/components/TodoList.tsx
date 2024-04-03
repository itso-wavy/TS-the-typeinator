import { Todo } from '../todo.model';

interface TodoListProps {
  items: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
