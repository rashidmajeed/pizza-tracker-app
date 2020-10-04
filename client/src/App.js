import React from "react";

// Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/** Components */
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Auth/Login";
import Register from "./components/Pages/Auth/Register";
import Pizzas from "./components/Pizzas";
import Cart from "./components/Pages/Customers/Cart";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/menu" component={Pizzas} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
