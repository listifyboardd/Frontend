import Footer from './layout/Footer';
import Header from './layout/Header';
import Banner from './components/Banner';

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
      <Header></Header>
      <Banner></Banner>
      <Footer></Footer>
    </>
  );
}

export default Home;
