import Link from 'next/link';
import React from 'react';

export const NavItem = ({ mobile }: { mobile?: boolean }) => {
  return (
    <ul
      className={`flex gap-6 items-center justify-center ${
        mobile ? 'flex-col w-full text-center' : 'flex-row'
      }`}
    >
      <li className="py-2 cursor-pointer ml-10">
        <Link href="/gatherings">모임 찾기</Link>
      </li>
      <li className="py-2 cursor-pointer ml-10">
        <Link href={`/gatherings/yun`}>내 모임</Link>
      </li>
      <li className="py-2 cursor-pointer ml-10">
        <Link href={`/association`}>내 소속</Link>
      </li>
    </ul>
  );
};
