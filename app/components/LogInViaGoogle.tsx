import Image from 'next/image';
import googleIMG from '../../public/images/signin/google.svg';

function LogInViaGoogle() {
  return (
    <button
      className="
            border 
            border-white 
            rounded-[24px] 
            bg-[#4170A4] 
            text-[20px]
            flex
            items-center
            gap-[16px]
            px-[24px]
            py-[8px]
            mb-[32px]"
    >
      <Image src={googleIMG} alt="gooogle"></Image>
      Log in via Google
    </button>
  );
}

export default LogInViaGoogle;
