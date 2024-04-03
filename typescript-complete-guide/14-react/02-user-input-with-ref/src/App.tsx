import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const items = [{ id: 1, text: 'eating' }];

  return (
    <div className='App'>
      <NewTodo />
      <TodoList items={items}></TodoList>
    </div>
  );
};

export default App;

// `rfce`
// React.FunctionComponent: JSX를 반환하는 함수
// return문을 없애면 에러
// React.ClassicComponent
