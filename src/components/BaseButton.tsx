import React from 'react'
import styled from 'styled-components'

interface BaseButtonInterface {
  click(): void
}

const BaseButton:React.FC<BaseButtonInterface> = ({children, click}) => {
  return (
    <StyledContainer onClick={click}>
      {children}
    </StyledContainer>
  )
}

const StyledContainer = styled.button `

`

export default BaseButton