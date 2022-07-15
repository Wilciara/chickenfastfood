import React from 'react';
import Logo from '../images/logo.png';
import{FaShoppingBasket} from 'react-icons/fa';
import{FaUser} from 'react-icons/fa';
import { Link } from "react-router-dom";


export const Header = () => {


  
  return (
    <div className=" fixed z-50 w-screen bg-green-900 p-6 px-16">
      
      {/*desktop & tablet */}
      
      <div className="hidden md:flex w-full">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-10 object-cover"c alt="logo" />
          <p className="text-primary text-xl font-bold">fastfood</p>
        </Link>

        <ul 
        className="text-primary flex items-center gap-8 ml-auto">
          <li className="text-base text-primary hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Menu
          </li>
          <li className="text-base text-primary hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Sobre
          </li>
          <li className="text-base text-primary hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Pedidos
          </li>
          <li className="text-base text-primary hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Cozinha
          </li>
          <li className="text-base text-primary hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Compra
          </li>
                    
        </ul>
        <div 
        className="relative flex items-center justify-center">
          <FaUser className="text-primary text-2xl ml-20 cursor-pointer" />
         
        </div>

        <div 
        className="relative flex items-center justify-center">
          <FaShoppingBasket 
          className="text-primary text-2xl ml-20 cursor-pointer" />
          <div 
          className="absolute -top-1 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center ml-2">
            <p 
            className="text-sm text-white">2
            </p>
          </div>
        </div>
      </div>

      {/*mobile */}

      <div className= "flex md:hidden w-full h-full"></div>
    </div>
  );
};

export default Header;

