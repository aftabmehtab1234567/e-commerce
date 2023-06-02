import React from 'react';
import {Link} from 'react-router-dom'
import {ShoppingCart} from "phosphor-react";
import Shop from './Shop';
import Cart from './Cart';
export const Navbar = () => {
  return (
    <div className="navbar text-bg-dark">
      <div className="Link text-bg-dark">
        <Link to="/">Shop</Link>
        <Link to="/Cart">
          <ShoppingCart size={40}/>
        </Link>
      </div>
    </div>
  )
}
