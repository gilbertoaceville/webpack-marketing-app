import React, { Fragment, lazy, Suspense, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import HomeBgTwo from "../../assets/home/Home-Bg-2.png";
import useResize from "../../hooks/useResize";
import Button from "../../components/button/button.component";
import Footer from "../../components/footer/footer.component";
import Input from "../../components/form_input/input.component";
import { HomeService, HomeReasons } from "../../utility/constants";
import Loader from "../../components/loader/loader.component";
import { Headings } from "../../components/helmet/helmet.component";
import "react-toastify/dist/ReactToastify.css";
import { mailer } from "../../utility/functions";
import PreLoad from "../../components/loader/preload.component";
import ProfileCard from "../../components/profile_card/profile.component";
import { DataContext } from "../../App";
import classes from "./home.module.css";

const Navigation = lazy(() =>
  import("../../components/navigation/navigation.component")
);
const IntroComponent = lazy(() =>
  import("../../components/intro_component/intro.component")
);
const HeroComponent = lazy(() =>
  import("../../components/hero_component/hero.component")
);
const HomeClientLogos = lazy(() =>
  import("../../components/clientLogos/clientLogos.component")
);
const HomeImage = lazy(() =>
  import("../../components/home_image/image.component")
);
const NewsCard = lazy(() => import("./news.component"));

function Home(props) {
  const isMobile = useResize();
  const inputRef = useRef();

  // fetched data
  const { data, error } = useContext(DataContext);

  // resolve promise on conditional rendering
  const sendEmail = (e) => mailer(e, inputRef.current.value);
  return (
    <Fragment>
      <Headings
        title="Zirotech | Home"
        description="With innovative thinking & business- savvy attitude,We puts
                  life to your ideas through well-crafted web/app designs
                  ,development & customization. Associate with us to become a
                  brand."
      />
      <main className={classes.home_container}>
        <div className={classes.container}>
          <Suspense fallback={<div></div>}>
            <Navigation navBtnIndex={999} opacity={1} />
          </Suspense>
          <section className={classes.hero_page_wrapper}>
            <div className={classes.title_text_container}>
              <header>
                <h1>Web & App development with 5 years experience</h1>
                <p>
                  With innovative thinking & business- savvy attitude, We put
                  life to your ideas through well-crafted web/app designs,
                  development & customization. Associate with us to become a
                  brand.
                </p>
              </header>
            </div>
            {isMobile ? (
              <div className={classes.mobile_img_wrap}>
                <div className={classes.mobile_img_container}>
                  <img
                    src={
                      "https://ik.imagekit.io/xitvuuh9spa/home/stack_6mIpQOfsi.png"
                    }
                    alt="diagram rep. via objectives"
                    loading="lazy"
                    height="100%"
                    width="100%"
                  />
                </div>
              </div>
            ) : (
              <div>
                <Suspense fallback={<PreLoad />}>
                  <HomeImage />
                </Suspense>
              </div>
            )}
          </section>
        </div>
      </main>

      <article className={classes.hero_services_container}>
        <Suspense fallback={<Loader />}>
          <HeroComponent
            header="Our services"
            title={<h1>Create your awesome digital product with us.</h1>}
            _Array={HomeService}
          />
        </Suspense>
      </article>

      <Suspense fallback={<Loader />}>
        <IntroComponent
          nav={false}
          bgImg={HomeBgTwo}
          title="Transform your business with us right now"
          text="The value of presenting business on the Internet is undeniable. Yet, the presence itself doesn’t promise anything. We help to achieve success with a clear plan, best practices, and the latest technology."
          image={
            "https://ik.imagekit.io/xitvuuh9spa/home/ecommerce_V-H3E7gArP.png"
          }
          height="fit-content"
          btn="Let's talk"
        />
      </Suspense>

      <article className={classes.hero_reasons_container}>
        <Suspense fallback={<Loader />}>
          <HeroComponent
            image={
              "https://ik.imagekit.io/xitvuuh9spa/home/Bitmap_PgLdzZ6eW4H.png"
            }
            _Array={HomeReasons}
            align="flex-start"
            textAligned="left"
            title={
              <h1>
                Top three reasons why you should <span>choose</span> us
              </h1>
            }
          />
        </Suspense>
      </article>

      <section className={classes.home_news_container}>
        <div className={classes.home_news_wrapper}>
          <div className={classes.hero_header}>
            <header>
              <h1>
                You can read latest <span>news</span> about the company
              </h1>
            </header>
            <p>Get to know more about Zirotech and the latest news.</p>
            <a href="/blog">
              <div className={classes.home_news_btn}>
                <Button label="See more news" />
              </div>
            </a>
          </div>
        </div>
        {error ? (
          <ProfileCard text={<span>{`An error occurred: ${error}`}</span>} />
        ) : (
          <Suspense fallback={<PreLoad sClass={classes.mobile_preload} />}>
            <NewsCard data={data} {...props} />
          </Suspense>
        )}
      </section>

      <section className={classes.clients_container}>
        <div className={classes.clients_wrapper}>
          <header>
            <h1>Our Clients</h1>
          </header>
          <Suspense fallback={<div></div>}>
            <HomeClientLogos />
          </Suspense>
        </div>
      </section>

      <section className={classes.hero_email_platform}>
        <form
          onSubmit={sendEmail}
          className={classes.hero_email_platform_wrapper}
        >
          <header>
            <h1>
              Are you interested in <br />
              using our services?
            </h1>
          </header>
          <div className={classes.hero_email_input}>
            <Input
              ref={inputRef}
              type="email"
              name="user_email"
              required={true}
            />
          </div>
          <Button
            label="Send"
            icon={
              <svg
                enableBackground="new 0 0 128 128"
                height="128px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 128 128"
                width="128px"
              >
                <path d="M74.508,108.239c-0.772,0-1.479-0.445-1.81-1.148l-16.863-35.84L20.732,55.116c-0.734-0.337-1.193-1.083-1.164-1.891  c0.03-0.808,0.543-1.518,1.3-1.8l83.312-31.107c0.729-0.271,1.552-0.096,2.105,0.452c0.555,0.548,0.739,1.369,0.475,2.102  l-30.371,84.047c-0.274,0.761-0.98,1.28-1.788,1.318C74.569,108.238,74.538,108.239,74.508,108.239z M26.772,53.49l31.396,14.432  c0.429,0.197,0.774,0.539,0.975,0.965l15.122,32.139l27.264-75.448L26.772,53.49z" />
                <path d="M57.334,71.738c-0.512,0-1.023-0.195-1.414-0.586c-0.781-0.78-0.781-2.047,0-2.828l47.545-47.546  c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828L58.748,71.152C58.357,71.543,57.846,71.738,57.334,71.738z" />
              </svg>
            }
            type="submit"
          />
        </form>
      </section>

      <Footer />
      <ToastContainer
        draggable={false}
        position={toast.POSITION.BOTTOM_LEFT}
        autoClose={5000}
        toastClassName={classes.black_background}
        bodyClassName={classes.grow_font_size}
        progressClassName={classes.fancy_progress_bar}
      />
    </Fragment>
  );
}

export default Home;
