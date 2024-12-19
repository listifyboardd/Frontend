import Link from 'next/link';

interface MegaButtonProps {
  link: string;
  text: string;
}

function MegaButton({ link, text }: MegaButtonProps) {
  return (
    <Link
      href={link}
      className="
        bg-[#8ED2F7]
        text-[#1A3C55]
        max-w-[517px]
        aspect-square
        w-full
        rounded-[31px]
        font-kreadon
        font-semibold
        text-[40px]
        flex
        text-center
        items-center
        justify-center
        relative
      "
    >
      <div
        className="
          font-worksans
          font-medium
          text-[24px]
          absolute
          top-[-26px]
          right-0
          bg-[#8ED2F7]
          rounded-[31px]
          py-[25px]
          px-[18px]
        "
      >
        Check it now
      </div>
      <span className="max-w-[340px]">{text}</span>
    </Link>
  );
}

export default MegaButton;
