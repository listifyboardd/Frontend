'use client';
import Link from 'next/link';

interface ButtonProps {
  text: string; 
  styleType: 'white' | 'black'; 
  onClick?: () => void; 
  link?: string; 
}

const Button = ({ text, styleType, onClick, link }: ButtonProps) => {

  const whiteStyle = 'w-[175px] h-[49px] px-[24px] py-[6px] rounded-[24px] border border-black text-black text-[22px] cursor-pointer bg-white';
  const blackStyle = 'w-[175px] h-[47px] px-[24px] py-[6px] rounded-[24px] text-white text-[22px] cursor-pointer bg-[#7A7A7A]';

  return link ? (
    <Link href={link}>
      <button className={styleType === 'white' ? whiteStyle : blackStyle}>
        {text}
      </button>
    </Link>
  ) : (
    <button className={styleType === 'white' ? whiteStyle : blackStyle} onClick={onClick}>
      {text}
    </button>
  );
};

const ButtonList = () => {
  const figmaLink = "https://www.figma.com/design/fK4Zk4IuUyRDUOXbO2BIf6/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%94%D0%BA%D1%82-2024?node-id=99-252&t=K5U9QVanvaFBDdIW-1";

  return (
    <div className="flex justify-center gap-[20px] mt-[20px]">
      <Button text="Log in" styleType="white" link={figmaLink} />
      <Button text="Search" styleType="black" onClick={() => alert('Кнопка натиснута!')} />
    </div>
  );
};

export default ButtonList;
