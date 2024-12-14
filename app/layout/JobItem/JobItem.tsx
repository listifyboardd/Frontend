import Link from 'next/link';
import Image from 'next/image';
import locationIMG from '../../../public/images/JobItem/location.svg';
import getAgeOfAd from '../../utils/ageOfAd';
import { JobItemProps } from './JobItem.types';

function JobItem({
  adLink,
  date,
  title,
  location,
  position,
  salary,
  text,
}: JobItemProps) {
  return (
    <Link
      href={adLink}
      className="
      max-w-[517px]
      aspect-square
      rounded-[31px]
      flex
      flex-col
      justify-between
      text-white
    "
      style={{
        background: 'linear-gradient(180deg, #4170A4 0%, #192A3E 100%)',
      }}
    >
      <div
        className="
        flex
        justify-end
      "
      >
        <div
          className="
          border
          border-white
          h-[40px]
          rounded-[24px]
          px-[16px]
          py-[8px]
          mt-[24px]
          mr-[15px]
          text-[16px]
        "
        >
          {getAgeOfAd(date)}
        </div>
      </div>

      <div className="px-[24px] pb-[24px]">
        <div
          className="
          font-kreadon
          font-medium
          text-[32px]
          mb-[8px]
        "
        >
          {title}
        </div>
        <div className="w-full h-[1px] bg-white max-w-[280px]"></div>
        <div className="max-w-[280px]">
          <div className="flex justify-between text-[16px] mt-[9px] pr-[15px]">
            <div
              className="
                border
                border-white
                rounded-[24px]
                flex
                items-center
                px-[16px]
                py-[3px]
                h-[40px]"
            >
              <Image src={locationIMG} className="mr-[10px]" alt="location" />
              {location}
            </div>
            <div
              className="
              border
              border-white
              rounded-[24px]
              px-[16px]
              flex
              items-center
              h-[40px]
            "
            >
              {position}
            </div>
          </div>
        </div>
        <div className="font-medium mt-[16px] mb-[8px]">Salary: {salary}</div>
        <div className="text-[20px]">{text}</div>
      </div>
    </Link>
  );
}

export default JobItem;
