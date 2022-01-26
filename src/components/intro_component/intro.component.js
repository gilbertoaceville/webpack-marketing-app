import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import useResize from "../../hooks/useResize";
import { AnimatedImg } from "../animated/animated";
import Button from "../button/button.component";
import classes from "./intro.module.css";

const Navigation = lazy(() => import("../navigation/navigation.component"));

const IntroComponent = ({
  children,
  bgImg,
  height,
  image,
  title,
  text,
  nav = 1,
  btn,
  flexDirection,
  textAlign,
  navBtnIndex,
  opacity=0,
  background = "var(--bg)",
}) => {
  // width <= 768 === mobile
  const isMobile = useResize();
  const {
    home_container,
    container,
    hero_page_wrapper,
    title_text_container,
    hero_img_wrap,
    hero_img_container,
    btn_container,
    btn_wrap,
    hero_page_wrapper_direction,
    hero_page_wrapper_align,
  } = classes;

  // Container style attributes
  const backgroundProps = {
    background: bgImg ? `url(${bgImg})` : background,
    height: height,
  };

  return (
    <main style={backgroundProps} className={home_container}>
      <div className={container}>
        <Suspense fallback={<div>Navigation Loading...</div>}>
          {nav && <Navigation navBtnIndex={navBtnIndex} opacity={opacity} />}
        </Suspense>
        <section
          className={
            textAlign
              ? hero_page_wrapper_align
              : flexDirection
              ? hero_page_wrapper_direction
              : hero_page_wrapper
          }
        >
          <div className={title_text_container}>
            <header>
              <h1>{title}</h1>
              <p>{text}</p>
            </header>
            {children}
            {btn && (
              <div className={image ? btn_wrap : btn_container}>
                {" "}
                <a href="/contact-us">
                  <Button label={btn} />{" "}
                </a>
              </div>
            )}
          </div>
          {image && (
            <div className={hero_img_wrap}>
              <div className={hero_img_container}>
                {isMobile ? (
                  <img
                    src={image}
                    alt="diagram rep. via objectives"
                    loading="eager"
                    height="100%"
                    width="100%"
                  />
                ) : (
                  <AnimatedImg
                    whileTap={{ scale: 0.9 }}
                    drag={true}
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 1 },
                    }}
                    src={image}
                    alt="diagram rep. via objectives"
                    loading="eager"
                    height="100%"
                    width="100%"
                  />
                )}
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default IntroComponent;
