'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

import DropDown from '../DropDown/DropDown';
import { DropDownElement } from '../DropDown/DropDown.type';
import {
  Category,
  Country,
  Region,
  PostsFilterProps,
} from './PostsFilter.type';

function PostsFilter({ categoriesApiUrl }: PostsFilterProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);

  async function fetchCategories() {
    const response = await axios.get(categoriesApiUrl);
    setCategories(response.data);
  }

  async function fetchCountries() {
    const response = await axios.get(
      'https://listifyboard.com/api/posts/location/countries/'
    );
    setCountries(response.data);
  }

  async function fetchRegions() {
    const response = await axios.get(
      'https://listifyboard.com/api/posts/location/regions/'
    );
    setRegions(response.data);
  }

  async function fetchRegionsByCountry(country: DropDownElement | null) {
    if (!country) return;
    const body = {
      country_id: country.id,
    };
    const response = await axios.post(
      `https://listifyboard.com/api/posts/location/country-regions/`,
      body
    );
    setRegions(response.data);
  }

  useEffect(() => {
    fetchCategories();
    fetchCountries();
    fetchRegions();
  }, []);

  return (
    <div className="container !mb-7 flex w-full gap-6 font-worksans-[20px] text-[#1E1E1E80]">
      <DropDown
        id="categories"
        title="Choose category"
        elements={categories}
        onSelect={null}
      />
      <DropDown
        id="countries"
        title="Choose country"
        elements={countries}
        onSelect={fetchRegionsByCountry}
      />
      <DropDown
        id="regions"
        title="Choose region"
        elements={regions}
        onSelect={null}
      />

      <button className="button leading-[22px]">Search</button>
    </div>
  );
}

export default PostsFilter;