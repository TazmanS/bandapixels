import React from 'react'
import {useTypedSelector} from './hooks/useTypedSelector'
import List from './components/List'
import AddTask from './components/AddTask'

const App = () => {
  const tasks = useTypedSelector(state => state.tasks)
  return (
    <div>
      <div>ToDo List</div>
      <AddTask />
      <List tasks={tasks} />
    </div>
  )
}

export default App
