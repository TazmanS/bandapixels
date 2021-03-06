import React from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import {changeTask} from '../store/actions'

interface CheckboxInterface {
  check: boolean,
  id: number
}

const BaseCheckbox:React.FC<CheckboxInterface> = ({check, id}) => {
  const dispatch = useDispatch()

  function changeFunction() {
    dispatch(changeTask(id))
  }

  return (
    <StyledContainer 
      type="checkbox" 
      checked={check}
      onChange={changeFunction}
      className="form-check-input"
    />
  )
}

const StyledContainer = styled.input `
  min-width: 16px;
`

export default BaseCheckbox