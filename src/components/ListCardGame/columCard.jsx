/* import { useEffect, useState } from "react"
import useAllgame from "../../hooks/GetallGame/useAllGame" */
import CardGame from "../cardGame/index"


function ColumCard({objecto}) {

  return (
    <>
      <div className="z-0">
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
                  released={elem.released}
                genres={elem.genres}
                ratings={elem.ratings}
                />
          )
        }) }
      </div>
    </>
    )

}
export default ColumCard