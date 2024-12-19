'use client';

import { useState, useEffect } from 'react';

import Image from 'next/image';
import dropdownIMG from '../../../public/images/dropdown/dropdown.svg';

import { DropDownElement, DropDownProps } from './DropDown.type';

function DropDown({ id, title, elements, onSelect }: DropDownProps) {
  const [openDropdown, setOpenDropdown] = useState<string>('');
  const [selectedElement, setSelectedElement] =
    useState<DropDownElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target && !(event.target as HTMLElement).closest(`#${id}`)) {
        setOpenDropdown('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleSelectElement(element: DropDownElement | null) {
    setSelectedElement(element);
    if (onSelect) {
      onSelect(element);
    }
    setOpenDropdown('');
  }

  return (
    <div
      onClick={() => setOpenDropdown(openDropdown === 'open' ? '' : 'open')}
      id={id}
      className="flex-1 border-[1px] rounded-lg border-[#1A3C55] py-3 px-6 leading-[20px] cursor-pointer relative dropdown-container "
    >
      <button className="flex items-center justify-between w-full leading-[22px]">
        <span className="overflow-hidden whitespace-nowrap text-ellipsis">
          {selectedElement ? selectedElement.name : title}
        </span>
        <Image
          src={dropdownIMG}
          alt="Drodown"
          className={`${openDropdown === 'open' ? 'rotate-180' : ''}`}
        ></Image>
      </button>
      <div
        className={`${openDropdown === 'open' ? '' : 'hidden'} absolute bg-white text-[20px] w-full top-full left-0 rounded border-[1px] border-[#1A3C55] h-[202px] rounded-tr-none rounded-br-none  overflow-y-auto z-10`}
      >
        <div
          className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer"
          onClick={() => handleSelectElement(null)}
        >
          All
        </div>
        {elements.map((element) => (
          <div
            key={element.id}
            className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer"
            onClick={() => handleSelectElement(element)}
          >
            {element.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropDown;
export type { DropDownElement };
