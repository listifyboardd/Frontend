import Image from 'next/image';
import startBannerIMG from '../../../public/images/banner/start-banner.png';
import houseBannerIMG from '../../../public/images/banner/house-banner.png';
import jobBannerIMG from '../../../public/images/banner/job-banner.png';
import BannerProps from './Banner.type';

function Banner({ type }: BannerProps) {
  let bannerIMG;

  switch (type) {
    case 'start':
      bannerIMG = startBannerIMG;
      break;

    case 'house':
      bannerIMG = houseBannerIMG;
      break;

    case 'job':
      bannerIMG = jobBannerIMG;
      break;
  }

  return (
    <div className="container">
      <div className="mb-[32px]">
        <Image
          src={bannerIMG}
          alt="banner"
          className="w-full h-full object-cover"
        ></Image>
      </div>
    </div>
  );
}

export default Banner;
