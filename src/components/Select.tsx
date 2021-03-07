import React from 'react'
import styled from 'styled-components'

interface SelectInterface {
  value: string,
  change(event:React.ChangeEvent<HTMLSelectElement>): void,
  values: {
    title: string,
    value: string
  }[]
}

const Select:React.FC<SelectInterface> = ({value, change, values}) => {
  return (
    <StyledContainer value={value} onChange={change} className="form-select">
      {values.map(item => {
        return (
          <option 
            key={item.value} 
            value={item.value}
          >
            {item.title}
          </option>
        )
      })}
    </StyledContainer>
  )
}

const StyledContainer = styled.select `

`

export default Select