'use client';
import Image from 'next/image';
import eyeIMG from '../../public/images/signin/eye.svg';
import { useState, useEffect } from 'react';
import PopUp from '../components/PopUp';
import LogInViaGoogle from '../components/LogInViaGoogle';
import axiosInstance from '../utils/axiosInstance';
import {
  validateEmail,
  isMinLength,
  isNotUsername,
  hasNumbersAndLetters,
} from '../utils/validators';

function SignUpPage() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passVerif, setPassVerif] = useState<string>('');
  const [passwordType, setPasswordType] = useState<string>('password');
  const [passVerifType, setPassVerifType] = useState<string>('password');
  const [terms, setTerms] = useState<boolean>(false);
  const [popupState, setPopupState] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  function isPasswordMatch() {
    return password === passVerif;
  }

  // TODO error handling

  useEffect(() => {
    validateEmail(email);
  }, [email]);

  useEffect(() => {
    if (!isMinLength(password)) {
      setError('Password must be at least 8 characters long');
    } else if (!isNotUsername(password, name)) {
      setError('Password cannot be the same as your name');
    } else if (!hasNumbersAndLetters(password)) {
      setError('Password must contain letters and numbers');
    } else {
      setError('');
    }
  }, [password]);

  async function register() {
    if (!isPasswordMatch()) {
      setError('Passwords do not match');
      return;
    }

    if (!terms) {
      setError('You need to accept the terms and conditions');
      return;
    }

    const response = await axiosInstance.post('/api/users/register/', {
      email,
      password1: password,
      password2: passVerif,
      first_name: name,
    });

    if (response.status === 201) {
      setPopupState(true);
    }
  }

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
        <div className="relative">
          <input
            className="form-inputs w-full"
            onChange={(e) => setPassword(e.target.value)}
            type={passwordType}
            placeholder="Passowrd"
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
        <div className="relative">
          <input
            className="form-inputs w-full"
            onChange={(e) => setPassVerif(e.target.value)}
            type={passVerifType}
            placeholder="Confirm password"
          />
          <Image
            src={eyeIMG}
            alt="eye"
            onClick={() =>
              passVerifType === 'text'
                ? setPassVerifType('password')
                : setPassVerifType('text')
            }
            className="pointer absolute top-1/2 right-[25px] transform -translate-y-1/2"
          ></Image>
        </div>
        <label className="select-none text-[20px] flex items-center gap-[16px]">
          <input
            onChange={(e) => setTerms(e.target.checked)}
            type="checkbox"
            className="w-[20px] h-[20px] ml-[15px] my-[16px]"
          />
          I accept the terms and conditions
        </label>
      </div>
      <LogInViaGoogle />
      <button onClick={register} className="border-button px-[57px] py-[5px]">
        Sign Up
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
            Please, check your email for verification
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
  );
}

export default SignUpPage;
