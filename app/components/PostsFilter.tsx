'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import dropdownIMG from '../../public/images/PostsFilter/dropdown.svg';

interface Category {
  id: number;
  name: string;
}

interface Country {
  id: number;
  name: string;
}

interface Region {
  id: number;
  name: string;
}

interface PostsFilterProps {
  categoriesApiUrl: string;
}

function PostsFilter({ categoriesApiUrl }: PostsFilterProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string>('');

  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(categoriesApiUrl);
      setCategories(response.data);
    } catch (err) {
      setError('Failed to load categories');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCountries = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        'https://listifyboard.com/api/posts/location/countries/'
      );
      setCountries(response.data);
    } catch (err) {
      setError('Failed to load countries');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRegions = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        'https://listifyboard.com/api/posts/location/regions/'
      );
      setRegions(response.data);
      console.log(response.data);
    } catch (err) {
      setError('Failed to load regions');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRegionsByCountry = async (countryId: number) => {
    setIsLoading(true);
    try {
      const body = {
        country_id: countryId,
      };
      const response = await axios.post(
        `https://listifyboard.com/api/posts/location/country-regions/`,
        body
      );
      setRegions(response.data);
    } catch (err) {
      setError('Failed to load regions');
    } finally {
      setIsLoading(false);
    }
  };

  const setSelectedCountryAndFetchRegions = (country: Country | null) => {
    setSelectedCountry(country);
    setSelectedRegion(null);
    if (country) {
      fetchRegionsByCountry(country.id);
    } else {
      fetchRegions();
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchCountries();
    fetchRegions();
  }, []);

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

  return (
    <div className="container flex w-full gap-6 font-worksans-[20px] text-[#1E1E1E80]">
      <div
        onClick={() => handleDropdownClick('category')}
        className="flex-1 border-[1px] rounded-lg border-[#1A3C55] py-3 px-6 leading-[20px] cursor-pointer relative dropdown-container "
      >
        <button className="flex items-center justify-between w-full">
          {selectedCategory ? selectedCategory.name : 'Choose category'}
          <Image
            src={dropdownIMG}
            alt="Drodown"
            className={`${openDropdown === 'category' ? 'rotate-180' : ''}`}
          ></Image>
        </button>
        <div
          className={`${openDropdown === 'category' ? '' : 'hidden'} absolute bg-white text-[20px] w-full top-full left-0 rounded border-[1px] border-[#1A3C55] h-[202px] rounded-tr-none rounded-br-none  overflow-y-auto`}
        >
          <div
            className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer"
            onClick={() => setSelectedCategory(null)}
          >
            All
          </div>
          {isLoading ? (
            <div className="py-2.5 px-3.5">Loading...</div>
          ) : error ? (
            <div className="py-2.5 px-3.5 text-500">{error}</div>
          ) : (
            categories.map((category) => (
              <div
                key={category.id}
                className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                {category.name}
              </div>
            ))
          )}
        </div>
      </div>
      <div
        onClick={() => handleDropdownClick('country')}
        className="flex-1 border-[1px] rounded-lg border-[#1A3C55] py-3 px-6 leading-[20px] cursor-pointer relative dropdown-container "
      >
        <button className="flex items-center justify-between w-full">
          {selectedCountry ? selectedCountry.name : 'Choose country'}
          <Image
            src={dropdownIMG}
            alt="Drodown"
            className={`${openDropdown === 'country' ? 'rotate-180' : ''}`}
          ></Image>
        </button>
        <div
          className={`${openDropdown === 'country' ? '' : 'hidden'} absolute bg-white text-[20px] w-full top-full left-0 rounded border-[1px] border-[#1A3C55] h-[202px] rounded-tr-none rounded-br-none  overflow-y-auto`}
        >
          <div
            className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer"
            onClick={() => setSelectedCountryAndFetchRegions(null)}
          >
            All
          </div>
          {isLoading ? (
            <div className="py-2.5 px-3.5">Loading...</div>
          ) : error ? (
            <div className="py-2.5 px-3.5 text-500">{error}</div>
          ) : (
            countries.map((country) => (
              <div
                key={country.id}
                className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer"
                onClick={() => setSelectedCountryAndFetchRegions(country)}
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
          {selectedRegion ? selectedRegion.name : 'Choose region'}
          <Image
            src={dropdownIMG}
            alt="Drodown"
            className={`${openDropdown === 'region' ? 'rotate-180' : ''}`}
          ></Image>
        </button>
        <div
          className={`${openDropdown === 'region' ? '' : 'hidden'} absolute bg-white text-[20px] w-full top-full left-0 rounded border-[1px] border-[#1A3C55] h-[202px] rounded-tr-none rounded-br-none  overflow-y-auto`}
        >
          <div
            className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer"
            onClick={() => setSelectedRegion(null)}
          >
            All
          </div>
          {isLoading ? (
            <div className="py-2.5 px-3.5">Loading...</div>
          ) : error ? (
            <div className="py-2.5 px-3.5 text-500">{error}</div>
          ) : (
            regions.map((region) => (
              <div
                key={region.id}
                className="py-2.5 px-3.5 hover:bg-[#64A6D8] transition duration-300 hover:text-white cursor-pointer"
                onClick={() => setSelectedRegion(region)}
              >
                {region.name}
              </div>
            ))
          )}
        </div>
      </div>
      <button className="button">Search</button>
    </div>
  );
}

export default PostsFilter;
