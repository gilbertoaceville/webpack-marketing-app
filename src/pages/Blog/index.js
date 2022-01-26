import React, {
  lazy,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { DataContext } from "../../App";
import Footer from "../../components/footer/footer.component";
import Input from "../../components/form_input/input.component";
import { Headings } from "../../components/helmet/helmet.component";
import Loader from "../../components/loader/loader.component";
import PreLoad from "../../components/loader/preload.component";
import ProfileCard from "../../components/profile_card/profile.component";
import classes from "./blog.module.css";

const IntroComponent = lazy(() =>
  import("../../components/intro_component/intro.component")
);

const BlogCards = lazy(() => import("./blogCard.component"));
const Blog = (props) => {
  // fetched data
  const { data, error } = useContext(DataContext);

  // blogs
  const [blogData, setBlogData] = useState([]);
  const [popularBlog, setPopularBlog] = useState([]);

  const inputRef = useRef();

  /**
   *
   * @param {*} text refers to e.target.value of form input
   * return data for value typed
   */
  const filterSearchQuery = (e, text) => {
    e.preventDefault();
    let a = document.createElement("a");
    a.href = "#blog-list";
    if (text) {
      const filterByTitle = data.filter((item) =>
        item.header.toLowerCase().includes(text.toLowerCase())
      );
      setBlogData(filterByTitle);
      a.click();
    }
  };

  //return array when object-item isAvailable is true
  const filterByAvailability = useCallback(() => {
    if (data) {
      setPopularBlog(data.filter((item) => item.isAvailable));
    }
  }, [data]);

  useEffect(() => {
    setBlogData(data);
    filterByAvailability();
    //eslint-disable-next-line
  }, [data]);
  const {
    blog_input_container,
    blog_list_container,
    blog_list_wrapper,
    blog_list_header,
    blog_error_container,
    blog_list_loader,
  } = classes;
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Headings
          title="Blog | Search Our Latest Blog"
          description="We build scalable intelligent web & mobile applications that simplify Your Brand/company"
        />
        <IntroComponent
          title="Search Our Latest Blog"
          text="We build scalable intelligent web & mobile applications that simplify Your Brand/company"
          image={
            "https://ik.imagekit.io/xitvuuh9spa/about/blog/blog-1_E1ikAvhs2.png?updatedAt=1634513800431"
          }
          flexDirection="row-reverse"
          background="var(--bg-secondary)"
        >
          <form
            onSubmit={(e) => filterSearchQuery(e, inputRef.current.value)}
            className={blog_input_container}
          >
            <Input
              filterHandler={filterSearchQuery}
              inputTitle="Tap enter or click on the search icon to search"
              placeholder="Search news topic..."
              icon={true}
              ref={inputRef}
            />
          </form>
        </IntroComponent>
      </Suspense>

      <article className={blog_list_container}>
        <section id="blog-data" className={blog_list_wrapper}>
          <div className={blog_list_header}>
            <header>
              <h2>From the blog</h2>
            </header>
          </div>
          {error ? (
            <div className={blog_error_container}>
              <ProfileCard
                text={<span>{`An error occurred: ${error}`}</span>}
              />
            </div>
          ) : (
            <Suspense
              fallback={
                <div className={blog_list_loader}>
                  <PreLoad />
                </div>
              }
            >
              <BlogCards
                blogData={blogData}
                popularBlog={popularBlog}
                {...props}
              />
            </Suspense>
          )}
        </section>
      </article>

      <Footer background="var(--bg-secondary)" />
    </main>
  );
};

export default Blog;
