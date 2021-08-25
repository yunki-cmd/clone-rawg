import useAllgame from "../../hooks/GetallGame/useAllGame"
import ColumCard from "./columCard";

function ListCardGame() {

  const {cards,loading} = useAllgame()
  console.log(loading);
  function filtro(objecto,inicio) {
      const elementFilter =  objecto.filter((elemet, index) => {
        if (index >= inicio && index < inicio + 5) return elemet
        return ""
      })
       return elementFilter
    }

  return (
    <>

        {loading ? (<div className=" flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
                    </div>)
          : /* cards.map((elem) => {
              return (
                <CardGame key={elem.id}
                  id={elem.id}
                  background_image={elem.background_image}
                  slug={elem.slug}
                  platforms={elem.platforms}
                  metacritic={elem.metacritic}
                  name={elem.name}
                />
              );
            }) */
        (<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 m-3">
        
            <div>
            <ColumCard objecto={filtro(cards,0)} />
            </div>
            <div>
            <ColumCard objecto={filtro(cards,5)}/>
            </div>
            <div>
            <ColumCard objecto={filtro(cards,10)}/>
          </div>
          <div>
            <ColumCard objecto={filtro(cards,15)}/>
            </div>
          </div>
          )
        }
      
    </>
  );

}

export default ListCardGame