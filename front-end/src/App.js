import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './modules/auth/views/Login'


function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<Login />}></Route>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
