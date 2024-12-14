import Link from 'next/link';
import Image from 'next/image';
import profileIMG from '../../public/images/header/profile.svg';
import bannerIMG from '../../public/images/header/banner.png';

function Header() {
  return (
    <div className="container">
      <header className="">
        <div className="flex justify-between items-center my-[24px]">
          <Link href="/" className="font-kreadon font-semibold">
            ListiFyBoard
          </Link>
          <nav className="flex gap-[24px]">
            <ul className="flex items-center gap-[37px]">
              <li>
                <Link href="/housing">Housing</Link>
              </li>
              <li>
                <Link href="/job">Job</Link>
              </li>
            </ul>
            <div className="flex items-center gap-[20px]">
              <Link
                href="/create"
                className="
                font-kreadon
                bg-[#1A3C55]
                text-white
                rounded-[24px]
                py-[6px]
                px-6
              "
              >
                Create new ad
              </Link>
              <Link href="/profile" className="pr-4">
                <Image src={profileIMG} alt="profile"></Image>
              </Link>
            </div>
          </nav>
        </div>
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
      </header>
    </div>
  );
}

export default Header;
