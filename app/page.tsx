'use client';

import { useEffect, useState } from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Banner from './components/Banner/Banner';
import PostsFilter from './layout/PostsFilter/PostsFilter';
import MegaButton from './components/MegaButton';
import JobItem from './layout/JobItem/JobItem';
import HousingItem from './layout/HousingItem/HousingItem';
import OutputMode from './layout/OutputMode/OutputMode';
import axiosInstance from './utils/axiosInstance';
import {
  HousingServerResponse,
  JobServerResponse,
} from './types/serverresponse';

function Home() {
  const [jobPosts, setJobPosts] = useState<JobServerResponse[]>([]);
  const [housingPosts, setHousingPosts] = useState<HousingServerResponse[]>([]);

  function getFourPosts<T>(posts: T[]): T[] {
    let arr: T[] = [];
    for (let i = 0; i < 4; i++) {
      arr.push(posts[i]);
    }
    return arr;
  }

  async function fetchJobPosts() {
    const response = await axiosInstance.get('/api/posts/job-posts/');
    const posts: JobServerResponse[] = response.data.results;
    setJobPosts(getFourPosts(posts));
  }

  async function fetchHousingPosts() {
    const response = await axiosInstance.get('/api/posts/housing-posts/');
    const posts: HousingServerResponse[] = response.data.results;
    setHousingPosts(getFourPosts(posts));
  }

  useEffect(() => {
    fetchJobPosts();
    fetchHousingPosts();
  }, []);

  return (
    <>
      <Header></Header>
      <Banner type="start"></Banner>
      <div className="container">
        <PostsFilter categoriesApiUrl="https://listifyboard.com/api/posts/job-posts-categories/"></PostsFilter>
        <div className="flex gap-6 justify-center mt-20">
          <MegaButton
            link="/job-list"
            text="Top vacancies on the platform"
          ></MegaButton>
          <MegaButton
            link="/housing-list"
            text="Top housing/rental offers on the platform"
          ></MegaButton>
        </div>
        <OutputMode title="Recent open vacancies" useSwitcher={false}>
          {jobPosts.map((post: JobServerResponse) => {
            return (
              <JobItem
                adLink="/"
                date={post.publication_date}
                title={post.title}
                location={post.location_name}
                position={post.category_name}
                salary={post.salary}
                text={post.description}
              />
            );
          })}
        </OutputMode>
        <OutputMode
          title="Recent rental and housing listings"
          useSwitcher={false}
        >
          {housingPosts.map((post: HousingServerResponse) => {
            return (
              <HousingItem
                imgLink={post.main_image}
                adLink="/"
                date={post.publication_date}
                title={post.title}
                location={post.location_name}
                purpose={post.category_name}
                type={post.type_display}
                price={post.price}
                text={post.short_description}
              />
            );
          })}
        </OutputMode>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
