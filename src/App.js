import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import NavBar from './components/NavBar';
import About from "./components/About";
import Home from "./components/Home";
import Work from "./components/Work";
import CssPlay from "./components/CssPlay"
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-slate-700 text-white font-sans space-y-4 py-2">
      <header>
        <NavBar/>
      </header>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/css" element={<CssPlay/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
