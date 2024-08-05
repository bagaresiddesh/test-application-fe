import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Register from './userManagement/Register';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './userManagement/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/register' element={<Register/>}></Route>  
      <Route path='/login' element={<Login/>}></Route>      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
