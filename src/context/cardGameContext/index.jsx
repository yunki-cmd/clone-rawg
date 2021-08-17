import React, { useState } from "react";

const Contexto = React.createContext();

export function CardsContextProvider({ children }) {
  const [cards, setCard] = useState([]);

  return (
    <Contexto.Provider value={{ cards, setCard }}>
      {children}
    </Contexto.Provider>
  );
}

export { Contexto };
