import React from "react";
import classes from "./hero.module.css";

const HeroComponent = ({ title, header, image, align="center", textAligned="center", _Array=[] }) => {
  const {
    hero_wrapper,
    hero_card_wrapper,
    hero_header_container,
    hero_header_img,
    hero_header
  } = classes;
  return (
    <section className={hero_wrapper}>
      <header>
        {header && <h4>{header}</h4>}

        <div className={hero_header_container}>
          <div className={hero_header}>
            {title}
            <p>The value of presenting business on the Internet is undeniable. Yet, the presence itself doesn’t promise anything. We help to achieve success with a clear plan, best practices, and the latest technology.</p>
          </div>
          {image && (
            <div className={hero_header_img}>
              <img
                src={image}
                alt="hero logo"
                height="100%"
                width="100%"
                loading="eager"
              />
            </div>
          )}
        </div>
      </header>
      <div className={hero_card_wrapper}>
        {_Array
          .map(({title, text, img}) => (
            <HeroCard align={align} textAligned={textAligned} title={title} text={text} key={title} img={img} />
          ))}
      </div>
    </section>
  );
};

const HeroCard = ({ align, textAligned, img, title, text  }) => {
  const { hero_card_container, hero_img_container } = classes;
  return (
    <figure
      style={{ alignItems: align, textAlign: textAligned }}
      className={hero_card_container}
    >
      <div className={hero_img_container}>
        <img src={img} alt="Icon" loading="eager" draggable={false} height="100%" width="100%" />
      </div>
      <header>
        <h4>{title}</h4>
      </header>
      <p>{text}</p>
    </figure>
  );
};
export default HeroComponent;
