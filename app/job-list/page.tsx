import Header from '../layout/Header';
import Footer from '../layout/Footer';
import PostsFilter from '../components/PostsFilter';

function JobList() {
  return (
    <>
      <Header></Header>
      <PostsFilter categoriesApiUrl="https://listifyboard.com/api/posts/job-posts-categories/"></PostsFilter>
      <main>
        <h1>JobList</h1>
      </main>
      <Footer></Footer>
    </>
  );
}

export default JobList;
