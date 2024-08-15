"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { useRouter } from 'next/router';

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  // const router = useRouter(); // Correctly import and use useRouter

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="NextApp logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text w-full">Cinebuzz</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden items-center gap-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          className="black_btn flex-1"
        />

        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <button
              type="button"
              onClick={() => signOut({ callbackUrl: '/' })}
              className="outline_btn"
            >
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user?.image}
                width={30}
                height={30}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <Link href="/sign-in" key={provider.name}>
                  <button
                    type="button"
                    className="black_btn"
                  >
                    Sign In
                  </button>
                </Link>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user?.image}
              width={30}
              height={30}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut({ callbackUrl: '/' });
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <Link href="/sign-in" key={provider.name}>
                  <button
                    type="button"
                    className="black_btn"
                  >
                    Sign In
                  </button>
                </Link>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
