import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./Auth/Auth";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Auth} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
