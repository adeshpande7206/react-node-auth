import Signin from "./Auth/Signin";
import { Route } from "react-router-dom";
import Homepage from "./HomePage/Homepage";
function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Homepage></Homepage>
      </Route>
      <Route path="/signin" exact>
        <Signin />
      </Route>
      <Route path="/signup" exact>
        <h1>Signup Page</h1>
        {/* <h1>Place the signup component here</h1> */}
      </Route>
    </div>
  );
}

export default App;
