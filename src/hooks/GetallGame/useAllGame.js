import { useContext, useEffect, useState } from "react";
import { Contexto } from "../../context/cardGameContext/index"
import fetchGame from "../../services/fethallgame/index"
import useFecha from "../Dates/useDates"
const Initial_Page = 1;

function useAllGame() {
  
  const {today} = useFecha().today
  const [nextPage, setNextPage] = useState(Initial_Page)
  const { dispatch } = useContext(Contexto);
  const {cards} = useContext(Contexto).cards
  const [loading, setloading] = useState(true)

  useEffect(() => {
    if (cards.length === 0 && today !== "") { 
      fetchGame({hasta:today})
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
  }, [cards,setloading,dispatch,today]);

  useEffect(() => {
    if (Initial_Page === nextPage) return
    fetchGame({ page: nextPage,hasta:today })
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