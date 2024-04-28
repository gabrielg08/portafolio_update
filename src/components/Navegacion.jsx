import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='navbar flex flex-col min-w-96  sm:flex-row justify-between items-center bg-black text-white'>
      <div className='flex justify-between items-center w-full'>
        <h2 className='text-m m-6 font-semibold'>Gabriel Gonzalez</h2>
        <div className='block sm:hidden'>
          <button onClick={toggleMenu} className='text-white m-4 focus:outline-none'>
            <AiOutlineMenu size={24} />
          </button>
        </div>
      </div>
      <ul className={`flex flex-col ${showMenu ? 'block' : 'hidden'} sm:flex sm:flex-row sm:justify-around m-2`}>
        <li className='m-4'>Home</li>
        <li className='m-4 w-20'>About me</li>
        <li className='m-4'>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
