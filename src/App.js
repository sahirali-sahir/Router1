
import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<Registration/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;

