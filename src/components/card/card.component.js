import React from "react";
import { truncate } from "../../utility/functions";
import classes from "./card.module.css";

const Card = ({
  height,
  width,
  title = "Zirotech Launch a Dating App",
  text,
  idProps,
  img,
}) => {
  const { card_container, card_img_container } = classes;
  const cardStyles = {
    textAlign: "center",
    height: height,
    width: width,
    alignItems: "center",
    marginRight: "1.5em",
  };
  return (
    <figure id={idProps} style={width && cardStyles} className={card_container}>
      <div className={card_img_container}>
        <img
          src={img}
          alt=""
          draggable={false}
          loading="eager"
          width="100%"
          height="100%"
        />
      </div>
      <header>
        <h3 style={{ margin: width && "10px 0 4px 0" }}>{title}</h3>
      </header>
      <p>{truncate(text, 100)}</p>
    </figure>
  );
};

export default Card;
