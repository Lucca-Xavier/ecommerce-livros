import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../pages/AuthContext';

const Header = () => {
  const { isLoggedIn, logout } = useAuth();
 
 return (
    <header className="flex mx-8 my-4 justify-between rounded-xl px-12 py-3 bg-emerald-600 text-white">
      <ul className="flex justify-between">
        <span className="flex gap-8">
          <li><Link to="/userhome">Home</Link></li>
          <li><Link to="/carrinho">Carrinho</Link></li>
          <li><Link to="/orders">Minhas Compras</Link></li>
        </span>
      </ul>

      {isLoggedIn ? (
        <button onClick={logout} className="text-white">Logout</button>
      ) : (
        <Link to="/" className="text-white">Login</Link>
      )}
    </header>
  );
};

export default Header;
