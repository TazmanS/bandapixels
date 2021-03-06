export enum ActionType {
  ADD_TASK = 'ADD_TASK',
  DELETE_TASK = 'DELETE_TASK',
  CHANGE_DONE = 'CHANGE_DONE'
}

export const addTask = (newTask: string) => {
  let date = new Date().getTime()
  return {
    type: ActionType.ADD_TASK,
    payload: {
      title: newTask,
      date,
      done: false
    }
  }
}

export const deleteTask = (id: number) => {
  return {
    type: ActionType.DELETE_TASK,
    payload: id
  }
}

export const changeTask = (id: number) => {
  return {
    type: ActionType.CHANGE_DONE,
    payload: id
  }
}