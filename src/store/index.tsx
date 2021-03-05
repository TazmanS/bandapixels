import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './reducer'
import React from 'react'

export const store = createStore(reducer)

interface StoreInterface {
  children: React.ReactNode
}

const Store:React.FC<StoreInterface> = ({children}) => {
  return( 
    <Provider store={store}>{children}</Provider>
  )
}

export default Store