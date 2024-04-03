interface Todo {
  id: number;
  text: string;
}

const TodoList: React.FC<{ items: Todo[] }> = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
