import Link from 'next/link';
import Image from 'next/image';

import messangerIMG from '../../public/images/footer/messanger.svg';
import telegramIMG from '../../public/images/footer/telegram.svg';
import linkedinIMG from '../../public/images/footer/linkedin.svg';

function Footer() {
  return (
    <footer className="bg-[#1A3C55] text-white pt-[32px] pb-[24px] mt-14">
      <div className="container">
        <div className="flex justify-between">
          <div className="">
            <h2
              className="
              font-kreadon
              font-bold
              text-[32px]
              mb-[18px]
            "
            >
              ListifyBoard
            </h2>
            <p className="text-[16px] max-w-[460px]">
              <span className="font-bold">ListiFyBoard</span> is a versatile
              platform designed to connect job seekers with opportunities and
              landlords with tenants. Whether you're looking for your next
              career move or a place to stay, our easy-to-use website allows
              users to browse job listings, post resumes, and advertise rental
              properties all in one convenient space. Simplify your search and
              find what you need today!
            </p>
          </div>

          <div className="flex gap-[124px]">
            <div className="flex flex-col gap-[8px]">
              <div className="font-kreadon font-bold">Catalog</div>
              <Link href="/housing" className="underline text-[20px]">
                Housing
              </Link>
              <Link href="/job" className="underline text-[20px]">
                Job
              </Link>
            </div>

            <div className="flex flex-col gap-[10px]">
              <div className="font-kreadon font-bold">Contacts</div>
              <Link
                href="tel:+380986682721"
                className="font-kreadon text-[20px]"
              >
                +380986682721
              </Link>
              <Link
                href="mailto:listifyboard@gmail.com"
                className="font-kreadon text-[20px]"
              >
                listifyboard@gmail.com
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-[2px] bg-white my-[25px]"></div>

        <div className="flex justify-between">
          <Link
            href="/create"
            className="
            font-kreadon
            font-medium
            py-[5px]
            px-[24px]
            border-button
          "
          >
            Create new ad
          </Link>
          <div className="flex gap-[24px]">
            <Link href="/">
              <Image src={messangerIMG} alt="messanger"></Image>
            </Link>
            <Link href="/">
              <Image src={telegramIMG} alt="telegram"></Image>
            </Link>
            <Link href="/">
              <Image src={linkedinIMG} alt="linkedin"></Image>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
