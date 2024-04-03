import { useState } from 'react';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (newTodo: string) => {
    setTodos(prevTodos => [...prevTodos, { id: Math.random(), text: newTodo }]);
  };

  const todoDeleteHandler = (delId: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== delId));
  };

  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;

// `rfce`
// React.FunctionComponent: JSX를 반환하는 함수
// return문을 없애면 에러
// React.ClassicComponent

/* 
useRef<T>(T | null)
React에서 ref가 초기화되는 것은 해당 ref 객체가 해당하는 DOM 요소와 연결되는 것을 의미합니다.
일반적으로 ref를 사용하여 DOM 요소에 접근하려면 해당 요소가 렌더링될 때 생성되어야 합니다. React는 컴포넌트가 렌더링될 때 ref를 참조하는 DOM 요소를 찾고 ref 객체의 current 속성에 할당하여 초기화합니다.


const formSubmitHandler = (e: React.FormEvent) => {};





*/
