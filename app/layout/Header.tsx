import Link from 'next/link';
import Image from 'next/image';
import profileIMG from '../../public/images/header/profile.svg';

function Header() {
  return (
    <div className="container">
      <header className="">
        <div className="flex justify-between items-center py-[24px]">
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
      </header>
    </div>
  );
}

export default Header;
