import React from "react";
import { useLocation } from "react-router";
import Logo from "../../assets/logo.png";
import Footer from "../../components/footer/footer.component";
import Navigation from "../../components/navigation/navigation.component";
import ProfileCard from "../../components/profile_card/profile.component";
import classes from "./blog.module.css";

const BlogDetails = ({
  author = "Zirotech",
  role = "Mangement",
  img = "https://ik.imagekit.io/xitvuuh9spa/about/blog/blog-details-1_wBnwC4FjO27.jpg?updatedAt=1634513801070",
}) => {
  const { state } = useLocation();
  const {
    nav_container,
    nav_wrap,
    blog_hero_bg,
    blog_reader_container,
    blog_reader_wrap,
    blog_reader_text,
    blog_profile_container,
  } = classes;
  return (
    <main>
      <div className={nav_container}>
        <div className={nav_wrap}>
          <Navigation navBtnIndex={999} opacity={1} blog={false} img={Logo} />{" "}
        </div>{" "}
      </div>{" "}
      <div className={blog_hero_bg}>
        <img src={state.items.img_link} alt="title" draggable={false} />
      </div>
      <article className={blog_reader_container}>
        <section className={blog_reader_wrap}>
          <header>
            <h1> {state.items.header} </h1>{" "}
          </header>{" "}
          <div className={blog_reader_text}>
            <p> {state.items.details} </p>{" "}
            <div className={blog_profile_container}>
              <ProfileCard img={img} text="" name={author} role={role} />
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </article>
      <Footer />
    </main>
  );
};

export default BlogDetails;
