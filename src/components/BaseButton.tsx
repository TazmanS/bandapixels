import React from 'react'
import styled from 'styled-components'

interface BaseButtonInterface {
  click(): void,
  color?: string
}

const BaseButton:React.FC<BaseButtonInterface> = ({children, click, color = 'info'}) => {
  return (
    <StyledContainer onClick={click} className={`btn btn-${color}`}>
      {children}
    </StyledContainer>
  )
}

const StyledContainer = styled.button `
  padding: 5px;
  border-radius: 5px;
`

export default BaseButton