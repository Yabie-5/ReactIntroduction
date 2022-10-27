import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(['Todo1','Todo2'])

  return (
    <div className="App">
      <TodoList todos={todos}/>
      <button>タスクを追加</button>
      <button>完了したタスク</button>
    </div>
  );
}

export default App;
