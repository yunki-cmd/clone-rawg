import Header from '../../components/Header/index'
import ListCards from "../../components/ListCardGame/index"
import Nav from "../../components/aside/nav"
import useSearh from '../../hooks/getSearch/useSearh';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import search from '../../services/search/search';
function ResultadosBusqueda() {

  const { resultSealt,updateSearch } = useSearh()
  const { query } = useParams()
  
  useEffect(() => {
    async function fetchResult ()  {
      const result = await search(query)
      updateSearch(result.data.results)
    }
    if (resultSealt.length === 0) {
      fetchResult()
    }
  }, [resultSealt,query, updateSearch])



  return (
    <>
      <div>
        <Header />
      </div>
      <section className="flex z-0">
        <div>
          <aside className="text-white  w-56 relative top-10 left-6 flex justify-start">
            <nav>
              <div className="text-3xl font-bold my-3 hover:text-gray-500 cursor-pointer">
                <span>
                  Home
                </span>
              </div>
              <div className="text-3xl font-bold my-3 hover:text-gray-500 cursor-pointer">
                <span>
                  Reviens
                </span>
              </div>
              <div className="menu">
                <Nav />
              </div>
            </nav>
          </aside>
        </div>
        <div className="mx-8">
          <div className="text-white">
            <span className="text-7xl font-extrabold font-sans block">
            </span>
            {resultSealt ?  
            <ListCards cards={resultSealt} />
              : (<div>loading</div>)
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default ResultadosBusqueda




  


