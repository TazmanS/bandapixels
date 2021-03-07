import { ActionType } from './actions'

const initialState = {
  tasks: [
    {
      title: 'Welcome',
      date: new Date().getTime(), // id
      done: false
    }
  ]
}

interface State {
  tasks: {
    title: string,
    date: number,
    done: boolean
  }[]
}

type Payload = {
  title: string,
  date: number,
  done: boolean
}


type Action = 
  | addTask 
  | deleteTask
  | changeTask

interface addTask {
  type: ActionType.ADD_TASK,
  payload: Payload
}

interface deleteTask {
  type: ActionType.DELETE_TASK,
  payload: number
}

interface changeTask {
  type: ActionType.CHANGE_DONE,
  payload: number
}

export const reducer = (state : State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.ADD_TASK: 
      return {
        ...state,
        tasks: state.tasks.concat(action.payload)
      }
    
    case ActionType.DELETE_TASK: 
      let newArrDel = state.tasks.concat()
      let indexDel = newArrDel.findIndex(item => item.date === action.payload)
      newArrDel.splice(indexDel, 1)
      return {
        ...state,
        tasks: newArrDel
      }

    case ActionType.CHANGE_DONE: 
      let newArrChange = state.tasks.concat()
      let indexChange = newArrChange.findIndex(item => item.date === action.payload)
      newArrChange[indexChange].done = !newArrChange[indexChange].done

      return {
        ...state,
        tasks: newArrChange
      }
    
      default: 
        return {
          ...state
        }
  }
}

export type RootState = ReturnType<typeof reducer>;