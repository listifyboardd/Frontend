'use client';

import { useState, useEffect } from 'react';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import PostsFilter from '../layout/PostsFilter/PostsFilter';
import Banner from '../components/Banner/Banner';
import OutputMode from '../layout/OutputMode/OutputMode';
import JobItem from '../layout/JobItem/JobItem';

import { JobPost } from './page.types';

import axiosInstance from '../utils/axiosInstance';

function JobList() {
  const [jobPosts, setJobPosts] = useState<JobPost[]>([]);

  async function fetchJobPosts() {
    const response = await axiosInstance.get('/api/posts/job-posts/');
    setJobPosts(response.data.results);
  }

  useEffect(() => {
    fetchJobPosts();
  }, []);

  return (
    <>
      <Header></Header>
      <Banner type="job"></Banner>
      <PostsFilter categoriesApiUrl="/api/posts/job-posts-categories/"></PostsFilter>
      <OutputMode
        title="Found based on your request"
        useSwitcher={true}
        children={
          <>
            {jobPosts.map((jobPost) => (
              <JobItem
                key={jobPost.id}
                adLink={`https://listifyboard.com/api/posts/job-posts/${jobPost.slug}/`}
                date={jobPost.publication_date}
                title={jobPost.title}
                location={jobPost.location_name}
                position={jobPost.type_display}
                salary={jobPost.salary}
                text={jobPost.description}
              />
            ))}
          </>
        }
      ></OutputMode>
      <Footer></Footer>
    </>
  );
}

export default JobList;
