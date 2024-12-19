'use client';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import PostsFilter from '../components/PostsFilter/PostsFilter';
import Banner from '../components/Banner/Banner';
import Switcher from '../components/Switcher'; // Import Switcher component

function JobList() {
  function switchOnChange(viewType: string): void {
    console.log(`Switched to ${viewType} view`);
  }
  return (
    <>
      <Header></Header>
      <Banner type="job"></Banner>
      <PostsFilter categoriesApiUrl="https://listifyboard.com/api/posts/job-posts-categories/"></PostsFilter>
      <Switcher value="grid" onChange={switchOnChange}></Switcher>
      <main className="container">
        <h2 className="font-kreadon text-[36px] font-semibold leading-[46.8px] mb-[32px]">
          Found based on your request
        </h2>
      </main>
      <Footer></Footer>
    </>
  );
}

export default JobList;
