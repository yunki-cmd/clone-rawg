/* import { useEffect, useState } from "react"
import useAllgame from "../../hooks/GetallGame/useAllGame" */
import CardGame from "../cardGame/index"


function ColumCard({objecto}) {
  
  /* const {cards} = useAllgame()
  const [recorte,setRecorte] = useState(cards)
  const [proecss,setprocess] = useState(true)
  useEffect(() => {
     function filtro(objecto) {
      const elementFilter =  objecto.filter((elemet, index) => {
         if (index >= inicio && index < inicio+5) return elemet
      })
       return elementFilter
    }
    setRecorte(filtro(recorte))
    setprocess(false)
  },[]) */

  return (
    <>
      <div className="gap-3">
        {
         
          objecto.map(elem => {
            return (
             <CardGame key={elem.id}
                  id={elem.id}
                  background_image={elem.background_image}
                  slug={elem.slug}
                  platforms={elem.platforms}
                  metacritic={elem.metacritic}
                  name={elem.name}
                />
          )
        }) }
      </div>
    </>
    )

}
export default ColumCard