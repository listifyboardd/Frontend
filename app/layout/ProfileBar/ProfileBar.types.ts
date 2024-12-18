import { StaticImageData } from 'next/image';

export interface ProfileBarProps {
  imgLink: StaticImageData;
  name: string;
  phone: string;
  email: string;
  tgNickname: string;
  linkedinNickname: string;
  instagramNickname: string;
}

export interface SocialNetwork {
  nickname: string;
  img: string;
  alt: string;
}
