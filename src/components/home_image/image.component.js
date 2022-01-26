import React from "react";
import classes from "./image.module.css";
import { AnimatedDiv, AnimatedImg } from "../animated/animated";
import {
  heroImage,
  heroImageWrapper,
  subImage,
  subImagesContainer,
  subImageWrapper,
} from "./animation.config";
import { animatedImages } from "../../utility/constants";

const HomeImage = () => {
  return (
    <AnimatedDiv
      variants={heroImageWrapper}
      initial="initial"
      animate="animate"
      className={classes.hero_img_container}
    >
      <AnimatedImg
        src={
          "https://ik.imagekit.io/xitvuuh9spa/home/icons/Stack/person_EsHosfyMPav.png?updatedAt=1634661720559"
        }
        variants={heroImage}
        alt=""
        loading="eager"
        height="100%"
        width="100%"
        className={classes.person_img}
      />
      <SubImages />
    </AnimatedDiv>
  );
};

const SubImages = () => {
  return (
    <AnimatedDiv
      variants={subImagesContainer}
      initial="initial"
      animate="animate"
    >
      {animatedImages.map(({ className, imageUrl, animationSpeed }) => (
        <SubImage
          imageUrl={imageUrl}
          className={className}
          animationSpeed={animationSpeed}
          key={className}
        />
      ))}
    </AnimatedDiv>
  );
};

const SubImage = ({ className, imageUrl, animationSpeed }) => {
  return (
    <AnimatedDiv variants={subImageWrapper}>
      <AnimatedImg
        custom={animationSpeed}
        src={imageUrl}
        variants={subImage}
        alt=""
        className={`${classes.img_below} ${classes[className]}`}
      />
    </AnimatedDiv>
  );
};

export default HomeImage;
