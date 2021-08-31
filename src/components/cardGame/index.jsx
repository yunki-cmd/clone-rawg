import React, { Suspense, useCallback, useState } from "react";
import "./index.css"
import Trailer from "../Trailer/index"
import Loading from "../loading/loading";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function CardGame({ id,
          ratings,
          released,
          genres,
          background_image,
          slug,
          platforms,
          metacritic,
          name}) {
  
  const [collapse, setcollapse] = useState(false)


  const score = useCallback(function (score) {
    const score2 = parseInt(score);
    if (score2 <= 50) return "text-red-500 border-red-500";
    if (score2 > 50 && score2 <= 75) return "text-yellow-500 border-yellow-500";
    return "text-green-500 border-green-500";
  }, [])



  const handlericons = useCallback(function (rating_id) {
    const icons = {
      1: "/assets/icons/skip.png",
      3: "/assets/icons/meh.webp",
      4: "/assets/icons/recommended.png",
      5: "/assets/icons/excepcional.png",
    }
    return icons[rating_id]
  }, [])
  
  const plataformas = useCallback(function (name) {
    const name1 = name.split(" ")
    const plataforms = {
      Nintendo: "/assets/icons/nintendo.svg",
      Xbox: "/assets/icons/xbox.svg",
      PC: "/assets/icons/pc.svg",
      PlayStation: "/assets/icons/playstation.svg",
      linux: "/assets/icons/linux.svg",
      iOS: "/assets/icons/apple.svg",
      arrow: "/assets/icons/flecha.svg",
      macOS: "/assets/icons/apple.svg",
    };
    return plataforms[name1[0]]
  }, [])
  

  const handlerMouseEnter = useCallback(function (e) {
    setcollapse(true)
  }, [])
  const handlerMouseLeft = useCallback(function (e) {
    setcollapse(false)
  },[])



  return (
    <>
      <div style={{ backgroundColor: "#202020" }} className={classNames(collapse ? "my-4 transition duration-700 ease-in-out transform  hover:scale-105 z-10 max-h-80 relative rounded-lg" : "my-6 relative z-1 rounded-lg " )}  key={id} onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeft} >
        <div className="flex flex-col text-white rounded-lg ">
          <div>
            <img className={classNames(collapse ? "hidden transition duration-700 ease-in-out" :"block rounded-t-lg")} src={background_image} alt={slug} />
            {collapse && <Suspense fallback={Loading}><Trailer id={id} /> </Suspense>}
          </div>
          <div style={{ backgroundColor:"#202020"}} className="rounded-lg">
            <div className="flex gap-1 my-3">
              {platforms.map((elem) => {
                const name = elem?.platform?.name
                const img = plataformas(name)
                if (img) {
                  return (
                    <div className="p-1" key={name}>
                      <img
                        className="h-5 w-5"
                        src={img}
                        alt={elem?.platform?.name}
                      />
                    </div>
                  );
                }
                return null
              })}
              { metacritic ? (
              <div
                className={` font-bold tracking-wider border p-1 ${score(
                  metacritic
                )} `}
              >
                {metacritic}
                </div>) : null
              } 
            </div>
            <div className="capitalize text-2xl font-bold my-3 flex items-center">
              <span>{name}</span>
              <div role="button" className="inline-block self-center p-1">
                <img className="h-full w-5" src={handlericons(ratings[0]?.id)} alt={ratings[0]?.title} />
            </div>
            </div>
            
              <div className="m-1 text-gray-500 text-opacity-60 rounded-lg">
                {collapse ? (<>
              <div className="flex justify-between border-b-2 border-gray-500 border-opacity-50 m-1">
                <span className="p-1 py-2">Release</span>
                <span>{released}</span>
              </div>
              <div className="flex justify-between border-b-2 border-gray-500 border-opacity-50 m-1">
                <span className="p-1 py-2">Genero</span>
                <div className="self-end">
                  {genres.map(elem => {
                    return (<span className="m-1" key={elem.name}>{elem.name}</span>)
                  })}
                </div>
              </div> 
              <div className="flex justify-between   border-opacity-50 m-1">
                <span className="p-1 py-2">Chart</span>
                <span>top</span>
                </div> </>) : null}
              <a href="http://" className={classNames(collapse ? "block" : "hidden")}>
                  <div className="bg-gray-600 m-4 my-2 mb-5 p-2 rounded-lg flex justify-between">
                    <span className="text-white text-sm">Show more like this</span>
                    <span className="h-3 w-3 mr-2"><img src={plataformas("arrow")} alt=""  /></span>
                  </div>
                </a>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );


}
export default CardGame
