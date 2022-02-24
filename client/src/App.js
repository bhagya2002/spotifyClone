import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Dashboard from "./Dashboard";

// object with the information of the user after the ?
const code = new URLSearchParams(window.location.search).get("code");

function App() {
  // if code is not null, then we are logged in and return Dashboard else return Login
  return code ? <Dashboard code={code} /> : <Login />;
}

export default App;
