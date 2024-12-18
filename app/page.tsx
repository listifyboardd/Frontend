import Footer from './layout/Footer';
import Header from './layout/Header';
import Banner from './components/Banner/Banner';
import ProfileBar from './layout/ProfileBar/ProfileBar';
import { ProfileBarProps } from './layout/ProfileBar/ProfileBar.types';
import manIMG from '../public/images/man1.png';

function Home() {
  const bannerType = 'start';

  const profileBarProps: ProfileBarProps = {
    imgLink: manIMG,
    name: 'John Doe',
    phone: '+1 (555) 123-4567',
    email: 'john.taylor.dev@gmail.com',
    tgNickname: 'JoHN_234',
    linkedinNickname: 'John Taylor',
    instagramNickname: 'JoHNYayloriii',
  };

  return (
    <>
      <div className="">
        <Header></Header>
        <Banner type={bannerType}></Banner>
      </div>
      <main className="min-w-full">
        <ProfileBar {...profileBarProps}></ProfileBar>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Home;
