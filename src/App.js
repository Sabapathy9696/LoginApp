import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage';
import UserPage from './Components/UserPage';
import AdminPage from './Components/AdminPage';
import HRPage from './Components/HRPage';

function App() {
  
  return (
    <div className="App"> 
    <BrowserRouter> 
      <Routes>
         <Route path="/" element={<LandingPage />}/>
         <Route path="/user/:id" element={<UserPage />}/>
         <Route path="/admin/:id" element={<AdminPage />}/>
         <Route path="/hr/:id" element={<HRPage />}/>
      </Routes>
    </BrowserRouter>  
    </div>
  );  
}

export default App;
