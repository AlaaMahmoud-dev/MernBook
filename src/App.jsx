import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        {/*<Route path="/login" element={<Login />} />*/} 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
