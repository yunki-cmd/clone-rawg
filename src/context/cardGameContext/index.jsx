import React, { useReducer } from "react";

const Contexto = React.createContext();

export function CardsContextProvider({ children }) {

  const reducer = (state, action) => {
    if (action.type === "loading") {
      return {
        ...state,
        cards:action.payload
      }
    }
    if (action.type === "nextPage") {
      return {
        ...state,
        cards:state.cards.concat(action.payload)
      }
    }
    if (action.type === "search") {
      return {
        ...state,
        resultSealt:action.payload
    }}

    return state
  }

  const [cards, dispatch] = useReducer(reducer, {cards:[]});
  const [search, dispatchSearch] = useReducer(reducer, {
    resultSealt:[]
  })
  return (
    <Contexto.Provider value={{ cards, dispatch, dispatchSearch, search}}>
      {children}
    </Contexto.Provider>
  );
}

export { Contexto };
