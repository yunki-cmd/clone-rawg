
import React, { useReducer } from 'react'

const ContextoFecha = React.createContext()

export function Fecha({
  children
}) {

  const reducer = (state,action) => {
    switch (action.type) {
      case "@SetToday": {
        return {
          ...state,
          today:action.payload
        }
     }
      default: return state
    }
  }

  const [today, dispatch] = useReducer(reducer, {
    today:""
  })

  return (
    <ContextoFecha.Provider value = {{today,dispatch}}>
      {
        children
      }
    </ContextoFecha.Provider>
  )

}

export {
  ContextoFecha
}
