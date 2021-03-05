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
  },
  index: number
}

const ListItem:React.FC<ListItemInterface> = ({item, index}) => {
  const dispatch = useDispatch()

  function removeItem() {
    dispatch(deleteTask(index))
  }

  return (
    <StyledContainer>
      <BaseCheckbox check={item.done} index={index}/>   
        <div>{item.title}</div>
      <BaseButton
        click={removeItem}
      >REMOVE</BaseButton>
    </StyledContainer>
  )
}

const StyledContainer = styled.div `

`

export default ListItem