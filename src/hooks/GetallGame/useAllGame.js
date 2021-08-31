import { useContext, useEffect, useState } from "react";
import { Contexto } from "../../context/cardGameContext/index"
import fetchGame from "../../services/fethallgame/index"

const Initial_Page = 1;

function useAllGame() {
  
  const [nextPage, setNextPage] = useState(Initial_Page)
  const { dispatch } = useContext(Contexto);
  const {cards} = useContext(Contexto).cards
  const [loading,setloading] = useState(true)
  useEffect(() => {
    if (cards.length === 0) { 
      fetchGame()
        .then(resp => {
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

  useEffect(() => {
    if (Initial_Page === nextPage) return
    fetchGame({ page: nextPage })
      .then(resp => {
      dispatch({
        type: "nextPage",
        payload: resp.data.results
      })
    })

  }, [nextPage,dispatch])
  
  return { cards,loading,setNextPage };
}
export default useAllGame