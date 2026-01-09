import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdBookmarkAdd } from 'react-icons/md';
import { NavLink } from 'react-router';
 

const Navber = () => {
      const [b , setB ]= useState(false)
      
    const links =<>
      <li>  <NavLink to='/'  className={ ({isActive}) =>isActive? " bg-gray-300 text-indigo-700 font-bold text-lg mx-2" :" font-bold text-sm mx-2" }>Home</NavLink></li>
      <li>  <NavLink to='/about'  className={ ({isActive}) =>isActive? "  bg-gray-300 text-indigo-700 font-bold text-lg mx-2" :"font-bold text-sm mx-2" }>About</NavLink></li>
      <li>  <NavLink to='/card'  className={ ({isActive}) =>isActive? " bg-gray-300 text-indigo-700 font-bold text-lg mx-2" :"font-bold text-sm mx-2" }> <FaShoppingCart size={25} /></NavLink></li>
      <li>  <NavLink to='/pavrite'  className={ ({isActive}) =>isActive? "  bg-gray-300 text-indigo-700 font-bold text-lg mx-2" :"font-bold text-sm mx-2" }>  <MdBookmarkAdd size={25} /> </NavLink></li>
      <li>  <NavLink onClick={()=>setB(!b)} to='/firebase'  className={ ({isActive}) =>isActive? "   bg-gray-300 text-indigo-700 font-bold text-lg mx-2" :"font-bold text-sm mx-2" }>  {b ? <button>SignIn</button> : <button>SignOut</button>}  </NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm min-w-2xl mx-auto">
  <div className="navbar-start items-center">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 items-center  shadow">
       {links}
      </ul>
    </div>
    <a className=" font-bold  text-xl">FlagshipFaceOff</a>
  </div>
  <div className="navbar-center">
  
  </div>
  <div className="navbar-end  hidden md:flex">
    <ul className="menu flex space-x-2 menu-horizontal px-1 items-center">
        {links}
     </ul>
  </div>
</div>
    );
};

export default Navber;