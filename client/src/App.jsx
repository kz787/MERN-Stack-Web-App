import './App.css';
import {BrowserRouter as Routers, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

function App() {
  return (
   <>
    <Routers>
   <div className='container'>
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/product" element={<Product />}/>
      </Routes>
   </div>
    </Routers>
   </>
  );
}

export default App;
