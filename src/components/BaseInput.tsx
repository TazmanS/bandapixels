import React from 'react'
import styled from 'styled-components'

interface BaseInputInterface {
  value: string,
  change(event:React.ChangeEvent<HTMLInputElement>): void
}

const BaseInput:React.FC<BaseInputInterface> = ({value, change}) => {
  return (
    <StyledContainer 
      type="text" 
      value={value} 
      onChange={ event => change(event)}
    />
  )
}

const StyledContainer = styled.input `
  
`

export default BaseInput