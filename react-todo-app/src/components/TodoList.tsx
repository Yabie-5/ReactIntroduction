import React from 'react'

type Props = {
    todos: string[];
}
const TodoList = (props: Props) => {
  return (
    <div>{props.todos}</div>
  )
}

export default TodoList