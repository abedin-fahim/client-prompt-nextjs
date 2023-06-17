'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setProviders();
  }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link
        href='/'
        className='flex gap-2 flex-center'
      >
        <Image
          src='/assets/images/logo.svg'
          alt='Promptopia Logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>
      {/* Desktop Nav */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link
              href='/create_prompt'
              className='black_btn'
            >
              Create Post
            </Link>
            <button
              className='outline_btn'
              type='button'
              onClick={signOut}
            >
              Sign Out
            </button>
            <Link href='/profile'>
              <Image
                src='/assets/images/logo.svg'
                width={37}
                height={37}
                className='rounded-full'
                alt='Profile'
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'
                >
                  Sign In
                </button>;
              })}
          </>
        )}
      </div>
      {/* Mobile Nav */}
      <div className='sm:hidden flex relative'>
        {isUserLoggedIn ? (
          <div className='flex'>
            <Image
              src='/assets/images/logo.svg'
              width={37}
              height={37}
              className='rounded-full'
              alt='Profile'
              onClick={() => setToggleDropdown((prevState) => !prevState)}
            />
            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  className='dropdown_link'
                  href='/profile'
                  onClick={() => setToggleDropdown(false)}
                >
                  My profile
                </Link>
                <Link
                  className='dropdown_link'
                  href='/create-prompt'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  onClick={() => setToggleDropdown(false)}
                  className='mt-5 w-full black_btn'
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                <button
                  type='button'
                  className='black_btn'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>;
              })}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;