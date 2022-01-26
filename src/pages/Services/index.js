import React, { lazy, Suspense } from "react";
import Footer from "../../components/footer/footer.component";
import { Headings } from "../../components/helmet/helmet.component";
import Loader from "../../components/loader/loader.component";
import ProfileCard from "../../components/profile_card/profile.component";
import { clientComments } from "../../utility/constants";
import classes from "./services.module.css";

const IntroComponent = lazy(() =>
  import("../../components/intro_component/intro.component")
);
const Services = () => {
  const {
    section_text,
    testimonial_container,
    testimonial_wrap,
    testimonial_header,
    testimonial_wrapper,
    testimonial_wrap_right,
  } = classes;
  return (
    <main>
      <Headings
        title="Our Services | Turn your iDEAL to reality without difficulties"
        description="We provide one stop IT Solution services from concepting until production for Website, Software, & Mobile Development."
      />
      <Suspense fallback={<Loader />}>
        <IntroComponent
          title={
            <span>
              Turn your iDEAL to reality <br />
              without difficulties
            </span>
          }
          text={
            <span>
              We provide one stop IT Solution services from concepting until
              production <br />
              for Website, Software, & Mobile Development.
            </span>
          }
          textAlign="center"
          btn="Let's talk"
          background="var(--bg-primary)"
        />
      </Suspense>

      <section className={section_text}>
        <p>
          We are glad to offer compelling web and mobile app development
          services across all platforms such as iOS, Android and Web. Our deep
          tech expertise and agile approach ensure delivery of robust,
          fully-fledged, scalable mobile and web applications to help small &
          medium businesses and startups solve their challenges.
        </p>
      </section>

      <section className={testimonial_container}>
        <div className={testimonial_wrapper}>
          <div className={testimonial_wrap}>
            <svg width="48px" height="48px" viewBox="0 0 48 48" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.8533 9.11599C11.3227 13.9523 7.13913 19.5812 6.30256 26.0029C5.00021 36 13.9404 40.8933 18.4703 36.4967C23.0002 32.1002 20.2848 26.5196 17.0047 24.9942C13.7246 23.4687 11.7187 24 12.0686 21.9616C12.4185 19.9231 17.0851 14.2713 21.1849 11.6392C21.4569 11.4079 21.5604 10.9591 21.2985 10.6187C21.1262 10.3947 20.7883 9.95557 20.2848 9.30114C19.8445 8.72888 19.4227 8.75029 18.8533 9.11599Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M38.6789 9.11599C31.1484 13.9523 26.9648 19.5812 26.1282 26.0029C24.8259 36 33.7661 40.8933 38.296 36.4967C42.8259 32.1002 40.1105 26.5196 36.8304 24.9942C33.5503 23.4687 31.5443 24 31.8943 21.9616C32.2442 19.9231 36.9108 14.2713 41.0106 11.6392C41.2826 11.4079 41.3861 10.9591 41.1241 10.6187C40.9519 10.3947 40.614 9.95557 40.1105 9.30114C39.6702 8.72888 39.2484 8.75029 38.6789 9.11599Z"
                fill="black"
              />
            </svg>
            <div className={testimonial_header}>
              <svg width="40px" height="40px" viewBox="0 -64 640 640">
                <path d="M128 256c0 35.346-28.654 64-64 64S0 291.346 0 256s28.654-64 64-64 64 28.654 64 64zM64 384c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0-352C28.654 32 0 60.654 0 96s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64zm160 192c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0 160c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0-352c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64zm224 192c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0 160c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0-352c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64zm160 192c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0 160c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0-320c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z" />
              </svg>
              <header>
                <h2>
                  What our <span>customers</span> are <br />
                  saying about us
                </h2>
              </header>
            </div>
          </div>
          <div className={testimonial_wrap_right}>
            {clientComments.map(({ text, client, img, role }) => (
              <ProfileCard
                key={client}
                img={img}
                name={client}
                role={role}
                text={text}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer background="var(--bg-primary)" />
    </main>
  );
};

export default Services;
