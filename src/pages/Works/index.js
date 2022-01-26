import React, { lazy, Suspense, useState } from "react";
import Footer from "../../components/footer/footer.component";
import { Headings } from "../../components/helmet/helmet.component";
import Loader from "../../components/loader/loader.component";
import { ourWorkList } from "../../utility/constants";
import classes from "./works.module.css";

const IntroComponent = lazy(() =>
  import("../../components/intro_component/intro.component")
);
const Works = () => {
  // array of works
  const [workList, setWorkList] = useState(ourWorkList);

  //switch background
  const [selected, setSelected] = useState("All");

  // filter list of works
  const filterByContent = (text) => {
    const filteredList = ourWorkList.filter((item) =>
      item.dev.toLowerCase().includes(text.toLowerCase())
    );
    setWorkList(filteredList);
    setSelected(text);

    if (text.toLowerCase() === "all") return setWorkList(ourWorkList);
  };

  const {
    container,
    section_wrapper,
    section_header,
    section_text,
    section_filter_boxes,
    section_works_wrapper,
    section_works_container,
  } = classes;
  return (
    <main className={container}>
      <Headings
        title="Our Works | We take responsibility,You take advantage."
        description="We provide one stop IT Solution services from concepting until production for Website, Software, & Mobile Development."
      />
      <Suspense fallback={<Loader />}>
        <IntroComponent
          title="We take responsibility,You take advantage."
          text="We provide one stop IT Solution services from concepting until production for Website, Software, & Mobile Development."
          image={"https://ik.imagekit.io/xitvuuh9spa/works/works-1_epREk8SyO.png"}
          flexDirection="row-reverse"
        />
      </Suspense>

      <article className={section_wrapper}>
        <section className={section_header}>
          <header>
            <h1>Look our works today and everyday.</h1>
          </header>
          <p className={section_text}>
            This are the list of our latest projects
          </p>
        </section>
        <section className={section_filter_boxes}>
          {["All", "Website", "Mobile Apps", "Brand identity"].map((item) => (
            <Card
              key={item}
              isSelected={item === selected}
              filterByContent={filterByContent}
              item={item}
            />
          ))}
        </section>
        <section className={section_works_wrapper}>
          {workList.map(({img, dev}) => (
            <div
              key={Math.random().toString()}
              className={section_works_container}
            >
              <img
                src={img}
                alt={dev}
                loading="eager"
                height="100%"
                width="100%"
              />
            </div>
          ))}
        </section>
      </article>

      <Footer />
    </main>
  );
};

const Card = ({ item, filterByContent, isSelected }) => {
  const { section_box, section_box_active } = classes;
  return (
    <div
      onClick={() => filterByContent(item)}
      className={isSelected ? section_box_active : section_box}
    >
      <p>{item}</p>
    </div>
  );
};

export default Works;
