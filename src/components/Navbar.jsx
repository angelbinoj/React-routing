import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const NavLink = [
    {
        url: "/",
        text: "Home"
    },
    {
        url: "customers",
        text: "View Customers"
    },
    {
        url: "login",
        text: "Login"
    },
    {
        url: "register",
        text: "Sign Up"
    },
]
 

  return (
     <header className='bg-[#cddae5] grid md:grid-cols-2 sm:grid-cols-1 sm:pb-3 md:pb-0 lg:grid-cols-2 xl:grid-cols-2 sm:gap-1 md:gap-5  w-full h-20 border-b-2 shadow-lg '>
            <div className=' h-full  flex justify-around items-center  '>
                
                <h2 className='text-center  mx-auto w-fit text-2xl uppercase font-extrabold  text-slate-900'>User Management</h2>
            </div>
            <div className=' h-full text-center flex justify-around items-center'>
                {NavLink.map((item) => (
                    <Link key={item.text} className='text-slate-900 font-bold  hover:text-slate-100 p-2 rounded-md hover:bg-slate-800 ' children={item.text} to={item.url} />
                ))}
            </div>

        </header>
  );
};

export default Navbar;