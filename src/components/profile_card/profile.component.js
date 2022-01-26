import React from "react";
import classes from "./profile.module.css";

const ProfileCard = ({
  text = "Si sine causa, mox videro; interea hoc epicurus in ea quid est primumigitur, inquit, modo ista sis aequitate.",
  name = "",
  role = "",
  img,
  width,
}) => {
  const {
    card_container,
    card_profile,
    card_profile_wrap,
    card_profile_img,
    card_profile_details,
    card_icons_container,
    no_img_card,
  } = classes;
  return (
    <figure style={{ width: width }} className={card_container}>
      {text && <p>{text}</p>}
      <div className={img ? card_profile_wrap : no_img_card}>
        <div className={card_profile}>
          <div className={card_profile_img}>
            <img
              src={img}
              alt="."
              loading="eager"
              height="100%"
              width="100%"
              draggable={false}
            />
          </div>
          <div className={card_profile_details}>
            <header>
              <h4>{name}</h4>
            </header>
            <p>{role}</p>
          </div>
        </div>
        <div className={card_icons_container}>
          <span>
            <svg
              enableBackground="new 0 0 32 32"
              height="32px"
              id="svg2"
              version="1.1"
              viewBox="0 0 32 32"
              width="32px"
            >
              <g id="background">
                <rect fill="none" height="32" width="32" />
              </g>
              <g id="comment">
                <path d="M30,2v22H10.416l-6.002,6H2l0,0L2,2 M9.583,22H28V4H4v23.583L9.583,22z" />
                <rect height="2" width="18" x="8" y="8" />
                <rect height="2" width="18" x="8" y="12" />
                <rect height="2" width="12" x="8" y="16" />
              </g>
            </svg>
          </span>{" "}
          <span>
            <svg
              height="512px"
              className={classes.Layer_1}
              style={{ enableBackground: "new 0 0 512 512" }}
              version="1.1"
              viewBox="0 0 512 512"
              width="512px"
            >
              <g>
                <path d="M64,400h10.3l19.2-31.2c20.5-32.7,44.9-62.8,75.8-76.6c24.4-10.9,46.7-18.9,86.7-20V352l192-128L256,96v80.3   c-63,2.8-108.1,20.7-143.3,56.2c-52.3,52.7-48.7,119-48.7,135.7C64.1,377.1,64,389.9,64,400z M272,192v-64.7l148.1,96.8L272,320.8   V256c-91,0-144.6,24.6-192.2,105.4C79.8,361.4,71,192,272,192z" />
              </g>
            </svg>
          </span>
        </div>
      </div>
    </figure>
  );
};

export default ProfileCard;
