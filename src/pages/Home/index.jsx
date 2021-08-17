import Header from '../../components/Header/index'

import ListCards from "../../components/ListCardGame/index"
export default function Home() {

  return (
    <>
      <div>
        <Header />
      </div>
      <section className="flex">
        <div>
          <aside className="aside-menu text-white text-3xl w-56">
              <nav>
                <div>Home</div>
                <div>reviem</div>
                <div className="menu">
                    <div>
                        <span>New releases</span>
                        <ul>
                          <li>last 30 years</li>
                          <li>this week</li>
                          <li>next week</li>
                          <li>realse calendar</li>
                          </ul>
                    </div>
                    <div>
                      <span>Top</span>
                      <ul>
                        <li>the best of year</li>
                        <li>popular in 2020</li>
                        <li>all time top 250</li>
                      </ul>
                  </div>
                  <div>
                    <span>All Games</span>
                </div>
                <div>
                  <span>browse</span>
                  <ul>
                    <li>plataforms</li>
                    <li>Store</li>
                    <li>collection</li>
                    <li>reviems</li>
                    <li>Genres</li>
                    <li>creators</li>
                    <li>tags</li>
                    <li>developers</li>
                    <li>publishers</li>
                    <div>
                      <span>hide</span>
                    </div>
                  </ul>
                </div>
                <div>
                  <span>platforms</span>
                  <ul>
                    <li>pc</li>
                    <li>playStation 4</li>
                    <li>xbox one</li>
                    <li>Nintendo switch</li>
                    <li>ios</li>
                    <li>android</li>
                    <div>
                      <span>hide</span>
                    </div>
                  </ul>
                </div>
                </div>
              </nav>
            </aside>
        </div>
        <div>
          <div className="text-white">
            <span className="text-7xl font-bold font-sans">
            New and Trending
            </span>
          </div>
          <ListCards />
        </div>
      </section>
    </>
  );
}

