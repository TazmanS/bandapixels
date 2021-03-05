import React from 'react'
import styled from 'styled-components'

interface SelectInterface {
  value: string,
  change(event:React.ChangeEvent<HTMLSelectElement>): void
}

const Select:React.FC<SelectInterface> = ({value, change}) => {
  return (
    <StyledContainer value={value} onChange={change}>
      <option value="date">Date</option>
      <option value="title">Title</option>
      <option value="active">Active</option>
    </StyledContainer>
  )
}

const StyledContainer = styled.select `

`

export default Select