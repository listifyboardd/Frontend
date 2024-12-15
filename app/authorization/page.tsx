import Link from 'next/link';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

function AuthorizationPage() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <main className="text-white flex items-center justify-center my-[100px]">
          <div
            className="
					flex 
					flex-col 
					gap-[24px] 
					items-center 
					justify-center 
					w-full 
					max-w-[410px]"
          >
            <Link
              href="/signup"
              className="
						bg-[#1A3C55] 
						text-[36px] 
						rounded-[48px] 
						w-full 
						py-[7px]
            flex
            justify-center"
            >
              Sign up
            </Link>
            <Link
              href="/login"
              className="
						bg-[#1A3C55] 
						text-[36px] 
						rounded-[48px]
						w-full 
						py-[7px]
            flex
            justify-center"
            >
              Log in
            </Link>
          </div>
        </main>
      </div>
      <Footer></Footer>
    </>
  );
}

export default AuthorizationPage;
