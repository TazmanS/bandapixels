import React, { useState } from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import BaseButton from './BaseButton'
import BaseInput from './BaseInput'
import {addTask} from '../store/actions'


const AddTask = () => {
  const dispatch = useDispatch()

  const [newTask, setNewTask] = useState('')

  function addTaskFunction() {
    if (newTask.trim()) {
      dispatch(addTask(newTask))  
    }
    
    setNewTask('')
  }

  function setNewTaskFunction(e:React.ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value)
  }

  return (
    <StyledContainer onClick={(e) => e.preventDefault()}>
      <BaseInput value={newTask} change={setNewTaskFunction}/>
      <BaseButton click={addTaskFunction}>
        Add task
      </BaseButton>
    </StyledContainer>
  )
}

const StyledContainer = styled.form `
  display: flex;
  justify-content: center;
  width: 600px;
  gap: 15px;

  & input {
    width: auto;
  }
`

export default AddTask