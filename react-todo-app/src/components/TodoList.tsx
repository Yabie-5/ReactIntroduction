import React from 'react';
import Todo from './Todo';

type Props = {
    todos: string[];
}
const TodoList = (props: Props) => {
  return <div>
    {props.todos.map((todo) => <Todo todo={todo} key={todo}/>)}
  </div>
  
}

export default TodoList