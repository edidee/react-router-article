import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Classes from "./classes";
import Class from "./class";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />}>
            <Route exact path="/about/classes" element={<Classes />}>
              <Route exact path="/about/classes/:className" element={<Class />} />
            </Route>
          </Route>
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
