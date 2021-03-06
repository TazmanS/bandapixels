import React from 'react'
import styled from 'styled-components'
import BaseButton from './BaseButton'
import BaseCheckbox from './BaseCheckbox'
import {useDispatch} from 'react-redux'
import {deleteTask} from '../store/actions'

interface ListItemInterface {
  item: {
    title: string,
    date: number,
    done: boolean
  }
}

const ListItem:React.FC<ListItemInterface> = ({item}) => {
  const dispatch = useDispatch()

  function removeItem() {
    dispatch(deleteTask(item.date))
  }

  return (
    <StyledContainer>
      <label>
        <BaseCheckbox check={item.done} id={item.date}/>   
        <StyledTitle done={item.done ? item.done.toString() : undefined}>
          {item.title}
        </StyledTitle>  
      </label>
      <BaseButton
        color="danger"
        click={removeItem}
      >REMOVE</BaseButton>
    </StyledContainer>
  )
}

const StyledContainer = styled.div `
  display: flex;
  width: 600px;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  padding: 0 10px;

  & label {
    display: flex;
    align-items: center;
  }
`

const StyledTitle = styled.div<{done: String | undefined}> `
  word-break: break-all;
  margin: 0 10px;
  font-size: 24px;
  text-decoration: ${({done}) => done ? 'line-through' : null};
`

export default ListItem