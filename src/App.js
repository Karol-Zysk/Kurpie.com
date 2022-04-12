import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
