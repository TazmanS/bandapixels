import React from 'react'
import styled from 'styled-components'
import BaseInput from './BaseInput'
import Select from './Select'

interface FilterInterface {
  search: string,
  setSearch(event:React.ChangeEvent<HTMLInputElement>) :void,
  select: string,
  setSelect(event:React.ChangeEvent<HTMLSelectElement>) :void,
  reverseArr: string,
  setReverseArr(event:React.ChangeEvent<HTMLSelectElement>) :void
}

const FilterBlock:React.FC<FilterInterface> = ({
  search, setSearch, select, setSelect, reverseArr, setReverseArr
}) => {

  const sortValue = [
    {
      title: 'Date',
      value: 'date'
    },
    {
      title: 'Title',
      value: 'title'
    },
    {
      title: 'Done',
      value: 'done'
    },
  ]

  const orderValue = [
    {
      title: 'A-Z',
      value: 'none'
    },
    {
      title: 'Z-A',
      value: 'reverse'
    }
  ]
  
  return (
    <StyledContainer>
      <div>
        Seach: 
        <BaseInput 
          value={search} 
          change={setSearch} 
        />
      </div>
      <div>
        Sort: 
        <Select 
          value={select} 
          change={setSelect}
          values={sortValue}
        />  
      </div>
      <div>
        Order: 
        <Select 
          value={reverseArr} 
          change={setReverseArr}
          values={orderValue}
        />  
      </div>
    </StyledContainer>
  )
}

const StyledContainer = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
`

export default FilterBlock