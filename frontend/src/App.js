import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="App">
      <Navbar>
        <Switch>
          <Route path={"/home"} component={() => <Home />} />
        </Switch>
      </Navbar>
    </div>
  );
}

export default App;
