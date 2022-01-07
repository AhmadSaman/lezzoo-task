import { Button, Text } from "@chakra-ui/react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Text>hey</Text>
      <Button variant={"solid"}>click</Button>
      <Switch>
        <Route path={"/home"} component={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
