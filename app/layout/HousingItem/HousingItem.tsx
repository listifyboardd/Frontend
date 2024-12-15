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
      "
      />
      <div className="">{getAgeOfAd(date)}</div>
      <div className="">
        <div className="">
          <div className="">{title}</div>
          <div className=""></div>
          <div className="">
            <div className="">
              <Image src={locationIMG} alt="location" />
              {location}
            </div>
            <div className="">{purpose}</div>
            <div className="">{type}</div>
          </div>
        </div>
        <div className="">
          <div className="">Price: {price}</div>
          <div className="">{text}</div>
        </div>
      </div>
    </Link>
  );
}

export default HousingItem;
