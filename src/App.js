import './App.css'
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import AddBn from "./components/AddBn";
import ExiBnDt from './components/ExiBnDt';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ExiBn from './components/ExiBn';
import AddNewBnDet from './components/AddNewBnDet';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/ExiBnDt" element={<ExiBnDt/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<Signup/>} />
        <Route path='/AddBn' element={<AddBn/>}/>
        <Route path='/ExiBn' element={<ExiBn/>}/>
        <Route path='/AddNewBnDet' element={<AddNewBnDet/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
