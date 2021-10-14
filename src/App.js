import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddE1337 from "./components/AddE1337";
import E1337 from "./components/E1337";
import E1337List from "./components/E1337List";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/e1337" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/e1337"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={E1337List} />
          <Route exact path="/add" component={AddE1337} />
          <Route path="/e1337/:id" component={E1337} />
        </Switch>
      </div>
    </div>
  );
}


// class App extends Component {
//   render() {
//     // ...
//   }
// }

export default App;