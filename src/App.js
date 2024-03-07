import { BrowserRouter, Route, Routes } from 'react-router-dom/dist/index.js';
import './App.css';
import Login from './Login.js'
import Signup from './Signup.js';
function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>

  <Route path="/" element={<Login/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
