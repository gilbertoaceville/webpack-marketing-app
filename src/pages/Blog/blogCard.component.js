import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import Card from "../../components/card/card.component";
import { truncate } from "../../utility/functions";
import classes from "./blog.module.css";

/**
 *
 * @param {*} param0 blogData === API fetched in App.js and passed down to blog page through context API
 * @param {*} param1 popularData === blogData filtered using the isAvailable property in the API fetched
 * @returns Blog news list and filtered popular blog list
 * Note that this component is directly affiliated with the Blog Page
 * it was directly cut out of the Blog page and shares the same css file
 * it could not be moved to the components folder
 */
const BlogCards = ({ blogData, popularBlog }) => {
  // no of cards shown
  const [arrayNumber, setArrayNumber] = useState(4);

  // Load more data
  const loadMoreHandler = () =>
    setArrayNumber((arrayNumber) => arrayNumber + 2);

  // Load less data
  const loadLessHandler = () =>
    setArrayNumber((arrayNumber) => arrayNumber - 2);

  return (
    <div className={classes.blog_hero_page}>
      <div id="blog-list" className={classes.blog_list_left}>
        {blogData.length ? (
          <>
            <div className={classes.blog_list}>
              {blogData &&
                blogData.slice(0, arrayNumber)?.map((item) => (
                  <Link
                    to={{
                      pathname: `blog/${item._id}`,
                      state: { items: item },
                    }}
                    key={item._id}
                  >
                    <Card
                      img={item.img_link}
                      text={item.details}
                      title={item.header}
                    />
                  </Link>
                ))}
            </div>
            <div className={classes.blog_list_btn}>
              <Button
                onclick={loadLessHandler}
                disabled={arrayNumber === 4}
                label="Load Less"
              />
              <Button
                onclick={loadMoreHandler}
                disabled={arrayNumber > blogData.length}
                label="Load More"
              />
            </div>
          </>
        ) : (
          <div className={classes.blog_data_info}>
            <h3>No Data Available for Query</h3>
          </div>
        )}
      </div>
      <aside className={classes.popular_list_container}>
        <div className={classes.popular_list_header}>
          <header>
            <h2>Popular Blogs</h2>
          </header>
        </div>
        <div className={classes.blog_cards_section}>
          {popularBlog &&
            popularBlog?.map((item) => (
              <Link
                to={{
                  pathname: `blog/${item._id}`,
                  state: { items: item },
                }}
                key={item._id}
              >
                <PopularBlogCard
                  header={item.header}
                  details={item.details}
                  img={item.img_link}
                />
              </Link>
            ))}
        </div>
      </aside>
    </div>
  );
};

const PopularBlogCard = ({
  header = "Zirotech Launch a Dating App",
  details = "iMate is the dating app",
  img,
}) => {
  const { blog_card_container, blog_card_wrapper, blog_card_img } = classes;
  return (
    <figure className={blog_card_container}>
      <div className={blog_card_wrapper}>
        <header>
          <h4>{header}</h4>
        </header>
        <p>{truncate(details, 50)}</p>
      </div>
      <div className={blog_card_img}>
        <img
          src={img}
          alt=""
          height="100%"
          width="100%"
          loading="eager"
          draggable={false}
        />
      </div>
    </figure>
  );
};

export default BlogCards;
