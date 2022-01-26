import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card/card.component";
import classes from "./home.module.css";

/**
 * FIXME: THIS IS NOT A PAGE
 * @param {*} props === API fetched in App.js and passed down to home page through context API
 * @returns news feed
 * Note that this component is directly affiliated with the Home Page
 * it was directly cut out of the Home page and shares the same css file
 * it could not be moved to the components folder
 */
const NewsCard = (props) => {
  const { data } = props;
  const [index, setIndex] = useState(0);

  // switch to the next card
  const nextCard = () => setIndex((prevIndex) => prevIndex + 1);

  //switch to prev card
  const prevCard = () => setIndex((prevIndex) => prevIndex - 1);
  return (
    <>
      <div className={classes.news_card_wrapper}>
        <div
          style={{
            transform: `translateX(-${index * (100 / data.length)}%)`,
          }}
          className={classes.news_card_wrap}
        >
          {data &&
            data?.map((item) => (
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
        <div className={classes.direction_arrows_container}>
          <div
            style={{ zIndex: index === 0 && -1 }}
            onClick={prevCard}
            className={classes.direction_arrow}
          >
            <svg
              fill="none"
              stroke="#6236FF"
              height="24"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
            >
              <line x1="20" x2="4" y1="12" y2="12" />
              <polyline points="10 18 4 12 10 6" />
            </svg>
          </div>
          <div
            style={{ zIndex: index === data.length - 1 && -1 }}
            onClick={nextCard}
            className={classes.direction_arrow}
          >
            <svg
              fill="none"
              stroke="#6236FF"
              height="24"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <polyline points="14 6 20 12 14 18" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
