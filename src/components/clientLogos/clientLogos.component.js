import React, { useEffect, useState } from "react";
import { shuffle } from "lodash-es";
import { AnimatedDiv } from "../animated/animated";
import {
  delay,
  spring,
  logoAnimation,
  logoTransition,
} from "./animation.config";
import classes from "./clientLogos.module.css";

const initialColors = [
  ["#FF008C", "#FFF0FC"],
  ["#D309E1", "#A3F9A1"],
  ["#9C1AFF", "#F1FA0F"],
  ["#7700FF", "#77E0FF"],
  ["#FF008D", "#F1FA0F"],
];

function HomeClientLogos() {
  const [colors, setColors] = useState(initialColors);

  useEffect(() => {
    let timer = setTimeout(() => setColors(shuffle(colors)), delay * 10000);
    return () => clearTimeout(timer);
  }, [colors]);
  return (
    <div className={classes.client_logo_wrapper}>
      {colors.map(([background, fill], idx) => (
        <AnimatedDiv
          transition={spring}
          whileHover={{ scale: 1.1 }}
          layout={spring}
          key={background}
          className={`${classes.client_img} ${classes[`img${idx + 1}`]}`}
        >
          <AnimatedDiv
            animate={logoAnimation}
            className={classes.shiner}
            transition={{
              ...logoTransition,
              delay: Math.random() * 3 * delay,
            }}
          ></AnimatedDiv>
        </AnimatedDiv>
      ))}
    </div>
  );
}

export default HomeClientLogos;
