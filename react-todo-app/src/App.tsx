import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]) //[ObjectVar, ??]
  
  // レンダリングするものを決める？
  useEffect(()  => {

  }, [])
  return (
    <div className="App">
      Hello World
      <button>ここ押してっちょ</button>
    </div>
  );
}

export default App;
