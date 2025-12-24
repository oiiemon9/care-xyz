'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

export default function NavButtons() {
  const session = useSession();

  return (
    <div className="navbar-end">
      {session.status === 'authenticated' ? (
        <div className="dropdown dropdown-end">
          <div
            data-tip={session?.data?.user?.name}
            className="tooltip tooltip-bottom"
          >
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={'/my-bookings'}>My Bookings</Link>
            </li>
            <li>
              <button
                onClick={() => signOut()}
                className="bg-accent text-white"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <Link href={'/login'} className="btn">
          Login
        </Link>
      )}
    </div>
  );
}
