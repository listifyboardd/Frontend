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
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passVerif, setPassVerif] = useState<string>('');
  const [passwordType, setPasswordType] = useState<string>('text');
  const [passVerifType, setPassVerifType] = useState<string>('text');
  const [error, setError] = useState<string>('');

  return (
    <div
      className="
      bg-[#1A3C55] 
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
        Sign up
      </h1>
      <div className="flex flex-col w-full max-w-[392px] gap-[8px]">
        <input
          className="form-inputs"
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          className="form-inputs"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="E-mail"
        />
        <input
          className="form-inputs"
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Passowrd"
        />
        <input
          className="form-inputs"
          onChange={(e) => setPassVerif(e.target.value)}
          type="text"
          placeholder="Confirm password"
        />
      </div>
      <label className="text-[20px] flex items-center gap-[16px]">
        <input type="checkbox" className="w-[20px] h-[20px]" />I accept the
        terms and conditions
      </label>
      <button className="border border-white rounded-[24px] px-[57px] py-[5px]">
        Sign Up
      </button>
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
      max-w-[410px]"
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
        <main className="text-white flex items-center justify-center my-[100px]">
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
