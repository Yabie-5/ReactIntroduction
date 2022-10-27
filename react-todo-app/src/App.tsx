import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]) //[ObjectVar, ??]
  
  // レンダリングするものを決める？
  useEffect(()  => {

  }, [])
  return (
    <div className="App">
      Hello World v1.1
    </div>
  );
}

export default App;
