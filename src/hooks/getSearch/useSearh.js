import { useContext } from "react"
import { Contexto } from "../../context/cardGameContext/index"


const useSearh = () => {
  const {
    dispatchSearch
  }= useContext(Contexto)
  const {
    resultSealt
  } = useContext(Contexto).search

  return ({
    resultSealt,
    updateSearch:(resultados) => {dispatchSearch({type:"search",payload:resultados})}
  })

}

export default useSearh
