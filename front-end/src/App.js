import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Busqueda from './components/Busqueda'


function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<Busqueda />}></Route>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
