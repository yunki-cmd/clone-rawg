
import logonitendo from "../../public/assets/icons/nintendo.svg";
import logoxbox from "../../public/assets/icons/xbox.svg";
import logopc from "../../public/assets/icons/pc.svg";
import logoplaystation from "../../public/assets/icons/playstation.svg";
import { useCallback, useEffect, useRef, useState } from "react";
import "./index.css"


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
          name,}) {
  
  const [collapse, setcollapse] = useState(false)
  const [menus,setmenus] = useState(false)
  const score = useCallback(function (score) {
    const score2 = parseInt(score);
    if (score2 <= 50) return "text-red-500 border-red-500";
    if (score2 > 50 && score2 <= 75) return "text-yellow-500 border-yellow-500";
    return "text-green-500 border-green-500";
  }, [])

  useEffect(() => {
    collapse ? setmenus(true) : setmenus(false)
    
  }, [collapse])

  const handlericons = useCallback(function (rating_id) {
    const icons = {
      1: "./assets/icons/skip.png",
      3: "./assets/icons/meh.webp",
      4: "./assets/icons/recommended.png",
      5: "./assets/icons/excepcional.png"
    }
    return icons[rating_id]
  }, [])
  
  const plataformas = useCallback(function (id) {
    const plataforms = {
      7: logonitendo,
      1: logoxbox,
      4: logopc,
      18: logoplaystation,
      default:logonitendo
    };
    return plataforms[id] || plataforms["default"]
  }, [])
  

  const handlerMouseEnter = useCallback(function (e) {

    setcollapse(true)

  }, [])
  const handlerMouseLeft = useCallback(function (e) {
 
    setcollapse(false)
  },[])


  
  return (
    <>
      <div className={classNames(menus ? "my-4 transition duration-500 ease-in-out transform  hover:scale-105    z-20 max-h-96  relative" : "my-4 relative z-1" )}  key={id} onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeft} >
        <div className="flex flex-col text-white rounded-lg">
          <div>
            <img className="rounded-xl" src={background_image} alt={slug} />
          </div>
          <div style={{ backgroundColor:"#151515"}}>
            <div className="flex gap-1 my-3">
              {platforms.map((elem) => {
                return (
                  <div className="p-1" key={elem.platform.id}>
                    <img
                      className="h-5 w-5"
                      src={plataformas(elem.platform.id)}
                      alt={elem.platform.name}
                    />
                  </div>
                );
              })}
              <div
                className={` font-bold tracking-wider border p-1 ${score(
                  metacritic
                )} `}
              >
                {metacritic}
              </div>
            </div>
            <div className="capitalize text-2xl font-bold my-3 flex items-center">
              <span>{name}</span>
              <div role="button" className="inline-block self-center p-1">
                <img className="h-full w-5" src={handlericons(ratings[0].id)} alt={ratings[0].title} />
            </div>
            </div>
            {menus ? (<><div className="m-1 text-gray-500 text-opacity-60">
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
              <div className="flex justify-between border-b-2 border-gray-500 border-opacity-50 m-1">
                <span className="p-1 py-2">Chart</span>
                <span>top</span>
                </div> 
            </div>
            </>) : null}
          </div>
        </div>
      </div>
    </>
  );


}
export default CardGame
