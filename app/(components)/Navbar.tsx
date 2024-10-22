'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { NavItem } from './NavItem';
import Image from 'next/image';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="w-full relative z-10">
      <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20 h-16">
        <div className="flex items-center text-2xl font-bold">
            <Image src='/logo.png' alt="logo image" width={60} height={60}/>
            <Link href="/" className='text-[#B21414]'>
                즉각즉각
            </Link>
        </div>

        <div className="hidden sm:flex flex-1">
          <NavItem />
        </div>

        <div className="flex gap-4">
          <button className="px-4 py-2 hidden sm:block">로그인</button>
          <button className="px-3 py-1 border-2 border-black rounded-md hidden sm:block">가입</button>
        </div>

        <div className="sm:hidden text-2xl">
          <button onClick={handleMenu}>
            {menu ? '-' : '+'}
          </button>
        </div>
      </div>

      <div className="sm:hidden">
        {menu && <NavItem mobile />}
      </div>
    </nav>
  );
};

export default Navbar;
