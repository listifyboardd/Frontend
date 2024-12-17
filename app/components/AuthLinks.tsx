import Link from 'next/link';

function AuthLinks() {
  return (
    <div
      className="
        bg-[#4170A4] 
        text-[20px] 
        text-white
        max-w-[224px]
        flex
        justify-between
				rounded-[24px]"
    >
      <Link
        href="/signup"
        className="
        hover:bg-[#1A3C55]
        	py-[12px]
					w-full
					flex
					justify-center
					rounded-s-[24px]
					transition
					duration-300"
      >
        Sign up
      </Link>
      <Link
        href="/login"
        className="
				hover:bg-[#1A3C55]
        	py-[12px]
					w-full
					flex
					justify-center
					rounded-e-[24px]
					transition
					duration-300"
      >
        Log in
      </Link>
    </div>
  );
}

export default AuthLinks;
