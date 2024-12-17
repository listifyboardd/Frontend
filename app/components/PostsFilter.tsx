'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import dropdownIMG from '../../public/images/PostsFilter/dropdown.svg';

interface Country {
  id: number;
  name: string;
}

function PostsFilter() {
  const [openDropdown, setOpenDropdown] = useState<string>('');
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleDropdownClick = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? '' : dropdownName);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.dropdown-container')) {
        setOpenDropdown('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          'https://listifyboard.com/api/posts/location/countries/'
        );
        setCountries(response.data.results);
      } catch (err) {
        setError('Failed to load countries');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="container flex w-full gap-6 font-worksans-[20px] text-[#1E1E1E80]">
      <div
        onClick={() => handleDropdownClick('category')}
        className="flex-1 border-[1px] rounded-lg border-[#1A3C55] py-3 px-6 leading-[20px] cursor-pointer relative dropdown-container "
      >
        <button className="flex items-center justify-between w-full">
          Choose category
          <Image
            src={dropdownIMG}
            alt="Drodown"
            className={`${openDropdown === 'category' ? 'rotate-180' : ''}`}
          ></Image>
        </button>
        <div
          className={`${openDropdown === 'category' ? '' : 'hidden'} absolute bg-white text-[20px] w-full top-full left-0 rounded border-[1px] border-[#1A3C55] border-r-0 h-[205px] overflow-y-scroll`}
        >
          <div className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer">
            Option 1
          </div>
          <div className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer">
            Option 1
          </div>
          <div className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer">
            Option 1
          </div>
          <div className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer">
            Option 1
          </div>
          <div className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer">
            Option 1
          </div>
          <div className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer">
            Option 1
          </div>
        </div>
      </div>
      <div
        onClick={() => handleDropdownClick('country')}
        className="flex-1 border-[1px] rounded-lg border-[#1A3C55] py-3 px-6 leading-[20px] cursor-pointer relative dropdown-container "
      >
        <button className="flex items-center justify-between w-full">
          Choose country
          <Image
            src={dropdownIMG}
            alt="Drodown"
            className={`${openDropdown === 'country' ? 'rotate-180' : ''}`}
          ></Image>
        </button>
        <div
          className={`${openDropdown === 'country' ? '' : 'hidden'} absolute bg-white text-[20px] w-full top-full left-0 rounded border-[1px] border-[#1A3C55] border-r-0 h-[205px] overflow-y-scroll`}
        >
          {isLoading ? (
            <div className="py-2.5 px-3.5">Loading...</div>
          ) : error ? (
            <div className="py-2.5 px-3.5 text-red-500">{error}</div>
          ) : (
            countries.map((country) => (
              <div
                key={country.id}
                className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer"
              >
                {country.name}
              </div>
            ))
          )}
        </div>
      </div>
      <div
        onClick={() => handleDropdownClick('region')}
        className="flex-1 border-[1px] rounded-lg border-[#1A3C55] py-3 px-6 leading-[20px] cursor-pointer relative dropdown-container "
      >
        <button className="flex items-center justify-between w-full">
          Choose region
          <Image
            src={dropdownIMG}
            alt="Drodown"
            className={`${openDropdown === 'region' ? 'rotate-180' : ''}`}
          ></Image>
        </button>
        <div
          className={`${openDropdown === 'region' ? '' : 'hidden'} absolute bg-white text-[20px] w-full top-full left-0 rounded border-[1px] border-[#1A3C55] border-r-0 h-[205px] overflow-y-scroll`}
        >
          <div className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer">
            Option 1
          </div>
          <div className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer">
            Option 1
          </div>
          <div className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer">
            Option 1
          </div>
          <div className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer">
            Option 1
          </div>
          <div className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer">
            Option 1
          </div>
          <div className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer">
            Option 1
          </div>
        </div>
      </div>
      <button className="button">Search</button>
    </div>
  );
}

export default PostsFilter;
