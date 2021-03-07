import React from 'react'
import styled from 'styled-components'

interface TimeInterface {
  date: number
}

const Time:React.FC<TimeInterface> = ({date}) => {
  return (
    <StyledContainer>
      <div>
        {new Date(date).getHours() < 10
          ? '0' + new Date(date).getHours()
          : new Date(date).getHours()
        }: 
      </div>   
      <div>
        {new Date(date).getMinutes() < 10
          ? '0' + new Date(date).getMinutes()
          : new Date(date).getMinutes()
        }: 
      </div>
      <div>
        {new Date(date).getSeconds() < 10
          ? '0' + new Date(date).getSeconds()
          : new Date(date).getSeconds()
        }
      </div>
    </StyledContainer>
  )
}

const StyledContainer = styled.div `
  display: flex;
`

export default Time