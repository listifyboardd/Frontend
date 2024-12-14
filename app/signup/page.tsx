'use client';
import { useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

interface StartButtonsProps {
  setContent: (content: string) => void;
}

function LogIN() {
  return <div>Log In Form</div>;
}

function SignUP() {
  return (
    <div className="">
      <h1></h1>
      <div className=""></div>
      <div className=""></div>
      <button>Sign Up</button>
    </div>
  );
}

function StartButtons({ setContent }: StartButtonsProps) {
  return (
    <div
      className="
      flex 
      flex-col 
      gap-[24px] 
      items-center 
      justify-center 
      w-full 
      max-w-[410px]
      my-[150px]"
    >
      <button
        onClick={() => setContent('signup')}
        className="
        bg-[#1A3C55] 
        text-[36px] 
        rounded-[48px] 
        w-full 
        py-[7px]"
      >
        Sign up
      </button>
      <button
        onClick={() => setContent('login')}
        className="
        bg-[#1A3C55] 
        text-[36px] 
        rounded-[48px]
        w-full 
        py-[7px]"
      >
        Log in
      </button>
    </div>
  );
}

function SignUp() {
  const [content, setContent] = useState('signup');

  return (
    <>
      <Header></Header>
      <div className="container">
        <main className="text-white flex items-center justify-center">
          {content === '' && <StartButtons setContent={setContent} />}
          {content === 'signup' && <SignUP />}
          {content === 'login' && <LogIN />}
        </main>
      </div>
      <Footer></Footer>
    </>
  );
}

export default SignUp;
