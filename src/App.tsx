import React from 'react'
import {useTypedSelector} from './hooks/useTypedSelector'
import styled from 'styled-components'
import List from './components/List'
import AddTask from './components/AddTask'

const App = () => {
  const tasks = useTypedSelector(state => state.tasks)
  return (
    <StyledContainer>
      <StyledTitle>ToDo List</StyledTitle>
      <AddTask />
      {tasks.length > 0 
      ? <List tasks={tasks} />
      : <div>Sorry, you did not add any tasks</div>
      }
    </StyledContainer>
  )
}

const StyledContainer = styled.div `
  width: 600px;
  min-height: 300px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid black;
`

const StyledTitle = styled.h3 `
  margin-top: 30px;
`

export default App
