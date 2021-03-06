import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ROUTE_ROOT } from "./routes";

function App() {
  return (
    <Router>
      <div className="bg-gray h-screen text-base text-current">
        <Navbar />
        <Switch>
          <Route path={ROUTE_ROOT}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
