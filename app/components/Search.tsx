'use client';

import { useState } from 'react';
import Image from 'next/image';
import searchIMG from '../../public/images/Search/search.svg';

function Search() {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="w-full relative">
      <input
        className="rounded-3xl border border-[#7A7A7A] border-solid py-2 px-4 w-full"
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
      />
      <Image
        className="absolute top-1/2 right-4 transform -translate-y-1/2"
        src={searchIMG}
        alt="search"
      />
    </div>
  );
}

export default Search;
