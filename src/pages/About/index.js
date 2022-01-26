import React, { Fragment, lazy, Suspense, useMemo } from "react";
import Button from "../../components/button/button.component";
import Footer from "../../components/footer/footer.component";
import { Headings } from "../../components/helmet/helmet.component";
import Loader from "../../components/loader/loader.component";
import PreLoad from "../../components/loader/preload.component";
import ProfileCard from "../../components/profile_card/profile.component";
import { useAjax } from "../../hooks/useAjax";
import { URL } from "../../utility/constants";
import "./about.css";

const IntroComponent = lazy(() =>
  import("../../components/intro_component/intro.component")
);

const Team = lazy(() => import("./team.component"));
// const properties = teamList;
const About = (props) => {
  // fetched data
  const { data, error } = useAjax(`${URL}/staff`);
  const response = useMemo(() => (data === null ? { data: [] } : data), [data]);
  const properties = response.data;
  return (
    <Fragment>
      <Headings
        title="About Us | Transform your business with us right now"
        description="We provide one stop identity branding services from concepting Website & Mobile Development."
      />
      <Suspense fallback={<Loader />}>
        <IntroComponent
          title="Transform your business with us right now"
          text="We provide one stop identity branding services from concepting Website & Mobile Development."
          image={
            "https://ik.imagekit.io/xitvuuh9spa/about/about-hero-image_qddGyhl3_q.png?updatedAt=1634513247437"
          }
        />
      </Suspense>

      <article className="about_content_container">
        <div className="about_content">
          <div className="about_hero_btn">
            <Button label="Who we are" />
          </div>
          <section className="about_text_content">
            <header>
              <h1>Mobile & Web App Development & Branding Services</h1>
            </header>
            <p className="about_text_describe">
              we are a tech Company that helps companies/businesses to launch
              their Website and Mobile applications.
            </p>
            <p>
              We are glad to offer compelling web and mobile app development
              services across all platforms such as iOS, Android and Web. Our
              deep tech expertise and agile approach ensure delivery of robust,
              fully-fledged, scalable mobile and web applications to help small
              & medium businesses and startups solve their challenges.
            </p>
          </section>

          <div className="about_img_wrapper">
            <img
              src={
                "https://ik.imagekit.io/xitvuuh9spa/about/about-illustration_ocXjvHSu7.png?updatedAt=1634513247614"
              }
              alt="illustration"
              loading="eager"
              height="100%"
              width="100%"
            />
          </div>
        </div>
      </article>

      <article className="about_team_wrap">
        <section id="team" className="about_team_wrapper">
          <header>
            <h2>Meet our great team</h2>
          </header>
          <p>Our professional experts are dedicated and result oriented</p>
          {error ? (
            <div className="about_error_container">
              <ProfileCard text={<span>{`An error occurred: ${error}`}</span>} />
            </div>
          ) : (
            <Suspense
              fallback={
                <div className="about_preload">
                  <PreLoad />
                </div>
              }
            >
              <Team properties={properties} {...props} />
            </Suspense>
          )}
        </section>
      </article>

      <Footer />
    </Fragment>
  );
};

export default About;
