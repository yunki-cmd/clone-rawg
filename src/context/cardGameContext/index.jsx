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

    return state
  }

  const [cards, dispatch] = useReducer(reducer, {cards:[]});

  return (
    <Contexto.Provider value={{ cards, dispatch}}>
      {children}
    </Contexto.Provider>
  );
}

export { Contexto };
