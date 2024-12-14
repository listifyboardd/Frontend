import Image from 'next/image';
import bannerIMG from '../../public/images/header/banner.png';

function Banner() {
  return (
    <div className="container">
      <div className="relative mb-[32px]">
        <Image
          src={bannerIMG}
          alt="banner"
          className="w-full h-full object-cover"
        ></Image>
        <div
          className="
                font-kreadon
                font-medium
                text-[48px]
                max-w-[636px]
                text-white
                absolute
                mt-[140px]
                ml-[120px]
                inset-0"
        >
          We are here to help you find that you need.
        </div>
      </div>
    </div>
  );
}

export default Banner;
