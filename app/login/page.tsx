'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import eyeIMG from '../../public/images/signin/eye.svg';
import PopUp from '../components/PopUp';
import LogInViaGoogle from '../components/LogInViaGoogle';
import axiosInstance from '../utils/axiosInstance';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { validateEmail } from '../utils/validators';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordType, setPasswordType] = useState<string>('password');
  const [popupState, setPopupState] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  async function login() {
    if (!validateEmail(email)) {
      setError('Invalid email');
      return;
    }

    try {
      await axiosInstance.post('/api/users/login/', {
        email,
        password,
      });
      router.push('/');
    } catch (e: any) {
      if (e.status === 400) {
        setError('Email or password is incorrect');
      }
    }
  }

  return (
    <>
      <Header></Header>
      <main className="flex items-center justify-center">
        <div
          className="
      bg-[#1A3C55] 
        text-white
        rounded-[48px] 
        flex 
        flex-col
        items-center 
        justify-center
        w-full
        max-w-[636px]
        aspect-square"
        >
          <h1 className="font-kreadon font-medium text-[40px] mb-[32px]">
            Log in
          </h1>
          {error ? (
            <div className="text-red-500 text-center p-2 rounded-md mb-2">
              {error}
            </div>
          ) : null}
          <div className="flex flex-col w-full max-w-[392px] gap-[8px]">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="E-mail"
              className="form-inputs"
            />
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={passwordType}
                placeholder="Password"
                className="form-inputs w-full"
              />
              <Image
                onClick={() =>
                  passwordType === 'text'
                    ? setPasswordType('password')
                    : setPasswordType('text')
                }
                src={eyeIMG}
                alt="eye"
                className="absolute top-1/2 right-[25px] transform -translate-y-1/2"
              ></Image>
            </div>
            <Link
              href="/halepa"
              className="underline text-[20px] pl-[15px] mb-[18px]"
            >
              Forgot password?
            </Link>
          </div>
          <LogInViaGoogle />
          <button onClick={login} className="border-button py-[9px] px-[66px]">
            Log in
          </button>
          <PopUp popupState={popupState}>
            <div className="flex flex-col items-center justify-center gap-[72px]">
              <h1
                className="
              font-kreadon
              font-medium
              text-black
              text-[36px] 
            "
              >
                Log in successful
              </h1>
              <button
                className="
              bg-[#1A3C55]
              rounded-[24px]
              px-[82px]
              py-[5px]
            "
                onClick={() => setPopupState(false)}
              >
                Ok
              </button>
            </div>
          </PopUp>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default LoginPage;
