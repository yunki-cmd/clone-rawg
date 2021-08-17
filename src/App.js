import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {CardsContextProvider} from "./context/cardGameContext/index"
// css

import "./App.css";

////pages////
import Home from "./pages/Home/index";

function App() {
  return (
    <div className="h-screen">
      <CardsContextProvider>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/home">
              <div className="text-white">home</div>
            </Route>
          </Switch>
        </Router>
      </CardsContextProvider>
    </div>
  );
}

export default App;
