import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = "px-3 py-2 rounded hover:bg-blue-100";
  const activeClass = "text-blue-600 font-bold";

  return (
    <div className='bg-teal-300 w-full h-30 text-lg grid sm:grid-cols-[50%_50%] md:grid-cols-[60%_40%] lg:grid-cols-[70%_30%] border-b-4 box-border overflow-x-hidden'>
      <div className='flex justify-center items-center'>
        <p className='uppercase tracking-widest italic p-2 border-4 border-teal-200 rounded shadow-2xl sm:text-2xl lg:text-3xl font-extrabold text-teal-800'>react routing app</p></div>


      <div className=" border-4 border-teal-400 h-full p-5 bg-white flex justify-between">
        <div> <NavLink to="/" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>  Home </NavLink> </div>
        <div> <NavLink to="/about" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>  About </NavLink> </div>
        <div> <NavLink to="/users" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>  Users </NavLink> </div>

      </div>
    </div>
  );
};

export default Navbar;