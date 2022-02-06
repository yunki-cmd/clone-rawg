import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CardsContextProvider } from "./context/cardGameContext/index"
import { Fecha } from "./context/fecha/fecha"
// css

import "./App.css";

////pages////
import Home from "./pages/Home/index";
import Search from "./pages/busquedaResultados/ResultadosBusqueda"

function App() {
  return (
    <div className="h-screen">
      <CardsContextProvider>
        <Fecha>
          <Router>
          <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/home" component={Home}></Route>
              <Route Route path = "/search/:query"component = {Search}></Route>
            </Switch>
          </Router>
          </Fecha>
        </CardsContextProvider>
    </div>
  );
}

export default App;
