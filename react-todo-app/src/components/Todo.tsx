import React from 'react'

type Props = {
    todo: string;
}

const Todo = (props: Props) => {
  return (
    <div>{props.todo}</div>
  )
}

export default Todo