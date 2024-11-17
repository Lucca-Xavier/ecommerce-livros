import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AdminHome from './pages/AdminHome';
import UserHome from './pages/UserHome';
import Login from './pages/Login';
import Register from './pages/Register';
import FormProduct from './pages/FormProduct';
import { AuthProvider } from './pages/AuthContext';
import Carrinho from './pages/Carrinho';
import Orders from './pages/Orders';
import Checkout from './pages/Checkout';
import Detail from './pages/Detail';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes> 
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addproduct" element={<FormProduct />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/produtos/:id" element={<Detail />} />


        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
