import emailjs from "emailjs-com";
import React, { lazy, Suspense, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/button/button.component";
import Footer from "../../components/footer/footer.component";
import { FormInput } from "../../components/form_input/input.component";
import { Headings } from "../../components/helmet/helmet.component";
import Loader from "../../components/loader/loader.component";
import { inputProperties, textAreaProps } from "../../utility/constants";
import classes from "./contacts.module.css";

const IntroComponent = lazy(() =>
  import("../../components/intro_component/intro.component")
);
const Contacts = () => {
  const [values, setValues] = useState({
    name: "",
    company_name: "",
    email: "",
    note: "",
  });

  // returns unique toast once
  const toast_id = "current-toast-id";

  //post form to email.js
  const postData = async (e) => {
    e.preventDefault();
    await toast.promise(
      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        "template_1j0hbvn",
        e.target,
        process.env.REACT_APP_USER_KEY
      ),
      {
        pending: {
          render() {
            return "Loading...";
          },
          icon: false,
        },
        success: {
          render({ data }) {
            return `${data.text}: Message sent`;
          },
          icon: "🟢",
        },
        error: {
          render({ data }) {
            // When the promise reject, data will contains the error
            return `Error ${data.text}: Message not sent`;
          },
        },
      },
      {
        toastId: toast_id,
      }
    );
    e.target.reset();
  };

  const onChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const {
    form_container,
    form_wrapper,
    form_header,
    forms,
    forms_wrap,
    form_btn,
  } = classes;
  return (
    <main>
      <Headings
        title="Contact Us | Web & App development with 5 years experience"
        description="We provide one stop IT Solution services from concepting until production for Website, Software, & Mobile Development."
      />
      <Suspense fallback={<Loader />}>
        <IntroComponent
          image={
            "https://ik.imagekit.io/xitvuuh9spa/contacts/contacts-1_Z9aeh4SG8.png"
          }
          title="Web & App development with 5 years experience"
          text="We provide one stop IT Solution services from concepting until production for Website, Software, & Mobile Development."
          background="var(--bg-secondary)"
          opacity={0}
        />
      </Suspense>

      <section className={form_container}>
        <form onSubmit={postData} className={form_wrapper}>
          <div className={form_header}>
            <header>
              <h2>Let's start a project </h2>
            </header>
            <p>Feel free to drop your contact here</p>
          </div>

          <div className={forms}>
            <div className={forms_wrap}>
              {inputProperties.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                  inputtype="input"
                />
              ))}
              <FormInput
                onChange={onChange}
                value={values[textAreaProps.name]}
                {...textAreaProps}
                inputtype="textArea"
              />
            </div>
          </div>

          <div className={form_btn}>
            <Button type="submit" label="Send" />
          </div>
        </form>
      </section>
      <ToastContainer
        draggable={false}
        position={toast.POSITION.BOTTOM_LEFT}
        autoClose={5000}
        toastClassName={classes.black_background}
        bodyClassName={classes.grow_font_size}
        progressClassName={classes.fancy_progress_bar}
      />
      <Footer background="var(--bg-secondary)" />
    </main>
  );
};

export default Contacts;
