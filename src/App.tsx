import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Contact } from "./Pages/Contact";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <Router>
          <Link to = "/">Home</Link>
          <Link to = "/login">login</Link>
          <Link to = "/contact">contact</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
