import { useContext, useEffect, useState } from "react";
import { Contexto } from "../../context/cardGameContext/index"
import fetchGame from "../../services/fethallgame/index"
function useAllGame() {
  
  const { dispatch } = useContext(Contexto);
  const {cards} = useContext(Contexto).cards
  const [loading,setloading] = useState(true)
  useEffect(() => {
    if (cards.length === 0) { 
      fetchGame()
        .then(resp => {
          console.log(resp.data.results)
          dispatch({
            type: "loading",
            payload: resp.data.results
          })
          setloading(false)
        })
    }
    if (cards.length > 0) {
      setloading(false)
    }
  }, [cards, dispatch]);


  
  return { cards,loading };
}
export default useAllGame