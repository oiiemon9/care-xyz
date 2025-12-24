import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <Link href={'/'} className="flex gap-1 w-fit">
      <div className="h-10 w-4 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800"></div>
      <div className="text-white leading-5 text-2xl font-bold">
        <h1>Care</h1>
        <h1>.Io</h1>
      </div>
    </Link>
  );
}
