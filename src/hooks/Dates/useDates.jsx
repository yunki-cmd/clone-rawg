import { useContext, useEffect } from "react"
import {ContextoFecha} from "../../context/fecha/fecha"

function useDates() {
  
  const {today} = useContext(ContextoFecha)
  const { dispatch } = useContext(ContextoFecha)

  const zeroFill = (number) => {
    if (number < 10) {
      number = number.toString()
      number = "0" + number
      return number
    }
    return number.toString()
  }

  useEffect(() => {
    if (today["today"] === "") {
      const fecha = new Date()
      const today1 = {
        año: fecha.getFullYear().toString(),
        mes: zeroFill(fecha.getMonth()+1),
        dia:zeroFill(fecha.getDate())
      }
      const hoy = today1.año +"-"+ today1.mes+"-"+ today1.dia
      dispatch({ type: "@SetToday", payload: hoy})
      }
  }, [today,dispatch])
  
  return {today}
  
}

export default useDates
