'use client';
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  styleType: 'main' | 'small';
  link?: string;
  onClick?: () => void;
}

const Button = ({ text, styleType, link, onClick }: ButtonProps) => {
  const mainStyle =
    'absolute w-[517px] h-[506px] left-[189px] top-[28px] bg-[#F2F2F2] rounded-[31px] justify-center font-["Work_Sans"] font-semibold text-[40px] text-black';
  const smallStyle =
    'relative w-[191px] h-[79px] left-[515px] bg-[#F2F2F2] rounded-[24px] flex items-center justify-center text-[18px] font-["Kreodon"] font-normal text-[#7A7A7A] z-10 transition-colors duration-300 ease-in-out hover:text-[#5A5A5A]';

  const buttonStyle = styleType === 'main' ? mainStyle : smallStyle;

  return link ? (
    <Link href={link}>
      <button className={buttonStyle}>{text}</button>
    </Link>
  ) : (
    <button className={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

const MegaButton = () => {
  const handleMainClick = () => {
    alert('Main button clicked');
  };

  const handleSmallClick = () => {
    alert('Checking it now...');
  };

  return (
    <div className=" w-[517px] h-[536px] filter drop-shadow-[4px_6px_4px_rgba(0,0,0,0.25)]">
      {/* Small Button Positioned Inside but Slightly Above */}
      <Button text="Check it now" styleType="small" onClick={handleSmallClick} />

      {/* Large Button (Container) */}
      <Button
        text=""
        styleType="main"
        onClick={handleMainClick}
      />
    </div>
  );
};

export default MegaButton;
