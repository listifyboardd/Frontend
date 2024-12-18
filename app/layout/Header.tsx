'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import profileIMG from '../../public/images/header/profile.svg';
import axiosInstance from '../utils/axiosInstance';
import AuthLinks from '../components/AuthLinks';

function Header() {
  const [logged, setLogged] = useState<boolean>();

  useEffect(() => {
    async function isLogged() {
      try {
        await axiosInstance.get('/api/users/user/');
        setLogged(true);
      } catch (e) {
        setLogged(false);
      }
    }

    isLogged();
  }, []);

  return (
    <div className="container">
      <header className="">
        <div className="flex justify-between items-center py-[24px]">
          <Link href="/" className="font-kreadon font-semibold">
            ListiFyBoard
          </Link>
          <div className="flex gap-8">
            <nav className="flex gap-[24px]">
              <ul className="flex items-center gap-[37px]">
                <li className="hover:text-medium">
                  <Link href="/housing" className="hover:font-medium">
                    Housing
                  </Link>
                </li>
                <li>
                  <Link href="/job-list" className="hover:font-medium">
                    Job
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-[20px]">
              <Link
                href="/create"
                className="
                font-kreadon
                bg-[#1A3C55]
                text-white
                text-[20px]
                rounded-[24px]
                py-[9px]
                px-6"
              >
                Create new ad
              </Link>
              <div className="">
                {logged ? (
                  <Link href="/profile">
                    <Image src={profileIMG} alt="profile"></Image>
                  </Link>
                ) : (
                  <div className="w-[224px]">
                    <AuthLinks />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
