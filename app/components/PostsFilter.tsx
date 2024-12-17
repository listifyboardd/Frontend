'use client';

import { useState } from 'react';
import Image from 'next/image';
import dropdownIMG from '../../public/images/PostsFilter/dropdown.svg';

function PostsFilter() {
  const [openDropdown, setOpenDropdown] = useState<string>('');

  const handleDropdownClick = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? '' : dropdownName);
  };

  return (
    <div
      className="
        container 
        flex w-full 
        gap-6 
        font-worksans-[20px] 
        text-[#1E1E1E80]
      "
    >
      <div className="flex-1 border-[1px] rounded-lg border-[#1A3C55] py-3 px-6 leading-[23px]">
        <button
          className="flex items-center justify-between w-full"
          onClick={() => handleDropdownClick('category')}
        >
          Choose category
          <Image src={dropdownIMG} alt="Drodown"></Image>
        </button>
        <div className={openDropdown === 'category' ? '' : 'hidden'}>
          <div>Option 1</div>
          <div>Option 1</div>
          <div>Option 1</div>
          <div>Option 1</div>
          <div>Option 1</div>
          <div>Option 1</div>
        </div>
      </div>
      <div className="flex-1 border-[1px] rounded-lg border-[#1A3C55] py-3 px-6 leading-[23px]">
        <button
          className="flex items-center justify-between w-full"
          onClick={() => handleDropdownClick('region')}
        >
          Choose region
          <Image src={dropdownIMG} alt="Drodown"></Image>
        </button>
        <div className={openDropdown === 'region' ? '' : 'hidden'}>
          <div>Option 1</div>
          <div>Option 1</div>
          <div>Option 1</div>
          <div>Option 1</div>
          <div>Option 1</div>
          <div>Option 1</div>
        </div>
      </div>
      <div className="flex-1 border-[1px] rounded-lg border-[#1A3C55] py-3 px-6 leading-[23px]">
        <button
          className="flex items-center justify-between w-full"
          onClick={() => handleDropdownClick('country')}
        >
          Choose country
          <Image src={dropdownIMG} alt="Drodown"></Image>
        </button>
        <div className={openDropdown === 'country' ? '' : 'hidden'}>
          <div>Option 1</div>
          <div>Option 1</div>
          <div>Option 1</div>
          <div>Option 1</div>
          <div>Option 1</div>
          <div>Option 1</div>
        </div>
      </div>
      <button className="button">Search</button>
    </div>
  );
}

export default PostsFilter;
