import React from 'react'
import Todo from './Todo'

export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
]

const DynamicListContent = () => {
  return (
    <div>
        {DUMMY_TODOS.map((todo) => (
            <Todo text={todo} />
        ))}
    </div>
  )
}

export default DynamicListContent