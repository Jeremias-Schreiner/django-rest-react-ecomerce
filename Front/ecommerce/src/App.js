
// Componentes
import Navbar from "./components/NavbarComponent";
import CardComponent from "./components/CardComponent";

// Contenedores
import CardContainer from "./container/CardContainer";

//React Router 
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <div className="flex justify-center flex-col">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<p className="text-white text-2xl font-bold">Home</p>} />
          <Route path="/about" element={<p className="text-white text-2xl font-bold">About</p>} />
          <Route path="/features" element={<p className="text-white text-2xl font-bold">Features</p>} />
          <Route path="/pricing" element={<p className="text-white text-2xl font-bold">Pricing</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
