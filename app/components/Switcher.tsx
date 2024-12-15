'use client';

import { useState } from 'react';
import Image from 'next/image';
import gridIMG from '../../public/images/switcher/grid.svg';
import lineIMG from '../../public/images/switcher/line.svg';

interface SwitcherProps {
  value: string;
  onChange: (value: string) => void;
}

function Switcher({ value, onChange }: SwitcherProps) {
  const [activeElement, setActiveElement] = useState('line');

  function changeActiveElement() {
    if (activeElement === 'line') {
      setActiveElement('grid');
      onChange('grid');
    } else {
      setActiveElement('line');
      onChange('line');
    }
  }

  return (
    <div
      onClick={changeActiveElement}
      className="
        flex
        items-center
        justify-between
        rounded-[24px]
        border
        border-[#192A3E]
        max-w-[100px]
        w-full
        py-[12px]
        px-[16px]
        select-none
    "
    >
      <div className="relative">
        <Image src={lineIMG} alt="line" className="" />
        {activeElement === 'line' ? (
          <div
            className="
            absolute 
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            bg-[#64A6D8] 
            rounded-[22px] 
            w-[38px] 
            h-[38px] 
            z-[-10]"
          ></div>
        ) : null}
      </div>
      <div className="relative">
        <Image src={gridIMG} alt="grid" className="" />
        {activeElement === 'grid' ? (
          <div
            className="
            absolute 
            top-1/2
            left-1/2
            -translate-x-1/2 
            -translate-y-1/2 
            bg-[#64A6D8] 
            rounded-[22px] 
            w-[38px] 
            h-[38px] 
            z-[-10]"
          ></div>
        ) : null}
      </div>
    </div>
  );
}

export default Switcher;
