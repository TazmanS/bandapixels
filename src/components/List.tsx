import React, { useState } from 'react'
import styled from 'styled-components'
import FilterBlock from './FilterBlock'
import ListItem from './ListItem'

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
  const [reverseArr, setReverseArr] = useState('')

  function setSearchFunction(event:React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  function setSelectFunction(event:React.ChangeEvent<HTMLSelectElement>) {
    setSelect(event.target.value)
  }

  function setReverseArrFunction(event:React.ChangeEvent<HTMLSelectElement>) {
    setReverseArr(event.target.value)
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

  function filters() {
    let copyArr = tasks.concat()
      .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
      .filter(activeFilter)
      .sort(selectSort)

      if (reverseArr === 'reverse') {
        return copyArr.reverse()
      } else {
        return copyArr
      }
  }

  return (
    <StyledContainer>
      <FilterBlock 
        search={search}
        setSearch={setSearchFunction}
        select={select}
        setSelect={setSelectFunction}
        reverseArr={reverseArr}
        setReverseArr={setReverseArrFunction}
      />
      {filters()
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


export default List