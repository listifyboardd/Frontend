'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import locationIMG from '../../../public/images/JobItem/location.svg';
import getAgeOfAd from '../../utils/ageOfAd';
import BorderElement from '../../components/BorderElement';
import { JobItemPropsInterface } from './JobItem.types';

function JobItem({
  adLink,
  date,
  title,
  location,
  jobtype,
  salary,
  text,
}: JobItemPropsInterface) {
  return (
    <Link
      href={adLink}
      className="
      flex
      flex-col
      justify-between
    "
    >
      <div
        className="
        flex
        justify-end
      "
      >
        {getAgeOfAd(date)}
      </div>

      <div className="main__content">
        <div className="title">{title}</div>
        <div className="flex">
          <BorderElement>{location}</BorderElement>
          <BorderElement>{jobtype}</BorderElement>
        </div>
        <div className="salary">
          <Image src={locationIMG} alt="location" />
          {salary}
        </div>
        <div className="text">{text}</div>
      </div>
    </Link>
  );
}

export default JobItem;
