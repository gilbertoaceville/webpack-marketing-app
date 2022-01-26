import React, {useLayoutEffect, useState} from "react";
import Card from "../../components/card/card.component";
import useResize from "../../hooks/useResize";
import './about.css';

/**
 * FIXME: THIS IS NOT A PAGE
 * @param {*} properties === API fetched in App.js and passed down to about page through context API
 * @returns list of company team
 * Note that this component is directly affiliated with the About Page
 * it was directly cut out of the About page and shares the same css file
 * it could not be moved to the components folder
 */
const Team = ({properties}) => {
    const [index, setIndex] = useState(0);
    // switch last index to 3
    const [lastIndex, setLastIndex] = useState(3);
  
    // width <= 768 === mobile
    const isMobile = useResize();
  
    //move to next card
    const nextCard = () => setIndex((prevIndex) => prevIndex + 1);
  
    //move to prev card
    const prevCard = () => setIndex((prevIndex) => prevIndex - 1);
  
    const checkIfLast = index === properties.length - 1;
  
    useLayoutEffect(() => {
      if (isMobile) {
        setLastIndex(1);
      } else {
        setLastIndex(3);
      }
    }, [isMobile, properties]);
  return (
    <div className={"about_team_list_wrapper"}>
      <div
        style={{ zIndex: index === 0 && -1 }}
        onClick={prevCard}
        className="about_direction_arrow"
      >
        <svg viewBox="0 0 96 96">
          <title />
          <path d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z" />
        </svg>
      </div>
        <div id={`about_active_${index}`} className="about_team_list_wrap">
          <div
            style={{
              transform: `translateX(-${index * (100 / properties.length)}%)`,
            }}
            className="about_team_list_container"
          >
            {properties &&
              properties.map(
                ({ staff_name, staff_role, img_link, _id }, index) => (
                  <div key={_id}>
                    <Card
                      height="250px"
                      width="170px"
                      title={staff_name}
                      text={staff_role}
                      img={img_link}
                      idProps={`card-${checkIfLast ? index : index - 1}`}
                    />
                  </div>
                )
              )}
          </div>
        </div>
      <div
        style={{
          zIndex: index === properties.length - lastIndex && -1,
        }}
        onClick={nextCard}
        className="about_direction_arrow"
      >
        <svg viewBox="0 0 96 96">
          <title />
          <path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" />
        </svg>
      </div>
    </div>
  );
};

export default Team;
