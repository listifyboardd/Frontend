import Image from 'next/image';
import Link from 'next/link';
import locationIMG from '../../../public/images/JobItem/location.svg';
import houseIMG from '../../../public/images/house.jpg';
import HousingItemProps from './HousingItem.types';
import getAgeOfAd from '../../utils/ageOfAd';

function HousingItem({
  imgLink,
  adLink,
  date,
  title,
  location,
  purpose,
  type,
  price,
  text,
}: HousingItemProps) {
  return (
    <Link
      href={adLink}
      className="
        relative
        rounded-[31px]
        flex
        flex-col
        justify-between
        max-w-[517px]
        w-full
        aspect-square
        text-white
        mb-9
    "
    >
      <Image
        src={houseIMG}
        alt="house"
        className="
        absolute
        top-0
        left-0
        z-[-10]
        rounded-[31px]
      "
      />
      <div
        style={{
          background:
            'linear-gradient(180.1deg, rgba(26, 60, 85, 0) 0.09%, #1A3C55 56.61%)',
        }}
        className="
        absolute
        z-[-9]
        w-full
        h-full
        rounded-[31px]
      "
      ></div>
      <div className="flex justify-end">
        <div
          className="
        border-button
        bg-[#1E1E1E80]
        max-w-[106px]
        flex
        justify-center
        w-full
        text-[16px]
        py-[4px]
        mt-[24px]
        mr-[24px]
      "
        >
          {getAgeOfAd(date)}
        </div>
      </div>
      <div className="pl-[24px] pb-8">
        <div className="max-w-[280px]">
          <div
            className="
            font-kreadon
            font-semibold
            text-[32px]
            mb-[8px]
          "
          >
            {title}
          </div>
          <div className="w-full bg-white h-[1px] mb-[8px]"></div>
          <div className="flex gap-[16px] flex-wrap text-[16px]">
            <div
              className="
              border-button
              flex
              gap-[10px]
              py-2
              px-4"
            >
              <Image src={locationIMG} alt="location" />
              {location}
            </div>
            <div className="border-button py-2 px-4">{purpose}</div>
            <div className="border-button py-2 px-4">{type}</div>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-[6px]">
          <div className="font-kreadon font-medium">Price: {price}</div>
          <div className="text-[20px] pr-6">{text}</div>
        </div>
      </div>
    </Link>
  );
}

export default HousingItem;
