'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import settingsIMG from '../../../public/images/profilebar/settings.svg';
import telegramIMG from '../../../public/images/profilebar/profile-telegram.svg';
import linkedinIMG from '../../../public/images/profilebar/profile-linkedin.svg';
import instagramIMG from '../../../public/images/profilebar/profile-instagram.svg';
import { SocialNetwork, ProfileBarProps } from './ProfileBar.types';

function ProfileBar({
  imgLink,
  name,
  phone,
  email,
  tgNickname,
  linkedinNickname,
  instagramNickname,
}: ProfileBarProps) {
  const [socialnetworks, setSocialnetworks] = useState<SocialNetwork[]>([]);

  useEffect(() => {
    const socialNetImages: SocialNetwork[] = [
      {
        nickname: tgNickname,
        img: telegramIMG,
        alt: 'telegram',
      },
      {
        nickname: linkedinNickname,
        img: linkedinIMG,
        alt: 'linkedin',
      },
      {
        nickname: instagramNickname,
        img: instagramIMG,
        alt: 'instagram',
      },
    ];

    const validLinks = socialNetImages.filter((item) => item.nickname);

    setSocialnetworks(validLinks);
  }, []);

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #1A3C55 0%, #3984BB 100%)',
      }}
      className="
			text-white
			max-w-[300px]
      pl-6
      pb-6
			pt-[24px]
      flex
      flex-col
      justify-between
      rounded-3xl"
    >
      <div className="flex justify-end pr-6">
        <Link href="/settings">
          <Image src={settingsIMG} alt="settings" />
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <Image src={imgLink} alt="profile" />
        <div className="text-medium mt-6 mb-6">{name}</div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="">
          <div className="text-xl mb-2">Phone</div>
          <div className="border-button inline-block text-base py-2 px-6">
            {phone}
          </div>
        </div>
        <div className="">
          <div className="text-xl mb-2">Email</div>
          <div className="border-button inline-block text-base py-2 px-6">
            {email}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="text-xl">Social networks</div>
        <div className="flex flex-wrap text-base">
          {socialnetworks.map((item) => {
            return (
              <div className="flex gap-[10px] py-[10px] px-[10px]">
                @ {item.nickname}
                <Image src={item.img} alt={item.alt} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProfileBar;
