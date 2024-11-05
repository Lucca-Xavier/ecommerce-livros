import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AdminHome from './pages/AdminHome';
import UserHome from './pages/UserHome';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />


      </Routes>
    </Router>
  );
}

export default App;
