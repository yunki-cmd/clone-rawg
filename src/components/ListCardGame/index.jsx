import React, { useCallback, useEffect, useRef, useState } from "react";
import CardGame from "../cardGame";
function ListCardGame({ cards, loading, },{colums = 4 } ={}) {



  return (
    <>

        {loading ? (<div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
                    </div>)
        : (<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 m-3">
          {cards.map((elem) => {
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
            );
          })}
        </div>)}
      
    </>
  );

}

export default React.memo(ListCardGame)