import { useContext, useEffect, useState } from "react";
import { Contexto } from "../../context/cardGameContext/index"
import fetchGame from "../../services/fethallgame/index"
function useAllGame() {
  
   const {cards,setCard} = useContext(Contexto);
  const [loading,setloading] = useState(true)
  useEffect(() => {
    if (cards.length === 0) { 
      fetchGame()
        .then(resp => {
          setCard(resp.data.results)
          setloading(false)
        })
    }
    if (cards.length > 0) {
      setloading(false)
    }
  }, [cards, setCard]);


  
  return { cards,loading };
}
export default useAllGame