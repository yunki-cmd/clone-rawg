import logo from "./loupe.svg";
import { useHistory } from "react-router-dom"
import buscador from "../../services/search/search";
import useSearh from "../../hooks/getSearch/useSearh";

function Search({ width } = { width: null }) {

  const {updateSearch} = useSearh()
  const history = useHistory()

  const handlerSearch = async (event) => {
    if (event.key === "Enter") {
      const search1 = event.target.value
      const resultados = await searchQuery(search1)
      updateSearch(resultados.data.results)
      history.push("/search/"+search1)
    }
  }

  const searchQuery = async (query) => {
    return await buscador(query)
  }

  return (
    <>
      <div
        className={`${width} h-full flex bg-gray-500 rounded-3xl group hover:bg-white`}
      >
        <span className="self-center ">
          <img className="w-9 h-4" src={logo} alt="icono" />
        </span>
        <input
          onKeyDown={handlerSearch}
          className={`text-gray-400 rounded-3xl outline-none h-full w-full bg-gray-500 group-hover:bg-white  hover:text-black`}
          type="search"
          name=""
          id=""
          placeholder="Search Games"
        />
      </div>
    </>
  );
}
export default Search