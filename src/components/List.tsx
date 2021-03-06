import React, { useState } from 'react'
import styled from 'styled-components'
import BaseInput from './BaseInput'
import ListItem from './ListItem'
import Select from './Select'

interface TasksInterface {
  tasks: {
    title: string,
    date: number,
    done: boolean
  }[]
}

const List:React.FC<TasksInterface> = ({tasks}) => {

  const [search, setSearch] = useState('')
  const [select, setSelect] = useState('')

  function setSearchFunction(e:React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  function setSelectFunction(event:React.ChangeEvent<HTMLSelectElement>) {
    setSelect(event.target.value)
  }

  function selectSort(a:any, b:any) {
    if (select === 'title') {
      return a.title.localeCompare(b.title)  
    } else if (select === 'date') {
      return a.date > b.date
    }
    return 0
  }

  function activeFilter(item:any) {
    if (select === 'done') {
      return item.done === true
    } else {
      return true
    }
  }

  return (
    <StyledContainer>
      <StyledFilter>
        <div>
          Seach: 
          <BaseInput 
            value={search} 
            change={setSearchFunction} 
          />
        </div>
        <div>
          Sort: 
          <Select value={select} change={setSelectFunction}/>  
        </div>
      </StyledFilter>
      {tasks
        .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        .filter(activeFilter)
        .sort(selectSort)
        .map((item) => {
        return (
          <ListItem 
            key={item.date}
            item={item}
          />
        )
      })}
    </StyledContainer>
  )
}

const StyledContainer = styled.div `
  margin-bottom: 30px;
  
`

const StyledFilter = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
`

export default List