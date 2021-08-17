import logo from "./loupe.svg";

function Search({ width } = { width: null }) {
  return (
    <>
      <div
        className={`${width} h-full flex bg-gray-500 rounded-3xl group hover:bg-white`}
      >
        <span className="self-center ">
          <img className="w-9 h-4" src={logo} alt="icono" />
        </span>
        <input
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