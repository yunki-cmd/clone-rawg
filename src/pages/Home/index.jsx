import Header from '../../components/Header/index'
import DropTop from "../../components/drowptop/Drowtop"
import ListCards from "../../components/ListCardGame/index"
import Nav from "../../components/aside/nav"
export default function Home() {
  const orderby = ["Relevance", "Date add", "Name", "Release Date", "populaty", "Average rating"]
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
        <div>
          <div className="text-white">
            <span className="text-7xl font-extrabold font-sans block">
            New and Trending
            </span>
            <span className="my-5 text-lg block">Based on player counts and release date</span>
          </div>
          <DropTop ordenby={orderby} title={"order by : "} />
          <DropTop ordenby={orderby} title={""}/>
          <ListCards />
        </div>
      </section>
    </>
  );
}

