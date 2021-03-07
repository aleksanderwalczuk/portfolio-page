import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ROUTE_CODE, ROUTE_ROOT } from "./routes";
import Blog from "./pages/Blog";
import { GraphQLClient, ClientContext } from "graphql-hooks";

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  },
});

function App() {
  console.log()
  return (
    <ClientContext.Provider value={client}>
      <Router>
        <div className="bg-gray h-screen text-base text-current">
          <Navbar />
          <Switch>
            <Route exact path={ROUTE_ROOT}>
              <Home />
            </Route>
            <Route path={ROUTE_CODE}>
              <Blog />
            </Route>
          </Switch>
        </div>
      </Router>
    </ClientContext.Provider>
  );
}

export default App;
