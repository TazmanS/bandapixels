import React from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import {changeTask} from '../store/actions'

interface CheckboxInterface {
  check: boolean,
  index: number
}

const BaseCheckbox:React.FC<CheckboxInterface> = ({check, index}) => {
  const dispatch = useDispatch()

  function changeFunction() {
    dispatch(changeTask(index))
  }

  return (
    <StyledContainer 
      type="checkbox" 
      checked={check}
      onChange={changeFunction}
    />
  )
}

const StyledContainer = styled.input `
  
`

export default BaseCheckbox