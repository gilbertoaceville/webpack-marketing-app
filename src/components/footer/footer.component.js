import React from "react";
import { Link } from "react-router-dom";
import { footerLinks } from "../../utility/constants";
import classes from "./footer.module.css";

const Footer = ({ background = "var(--bg)" }) => {
  const {
    footer_container,
    footer_wrap,
    footer_wrapper,
    footer_header,
    footer_brand,
    footer_links_wrap,
    copyright_content_wrap,
  } = classes;

  const footerStyle = {
    background,
  };
  return (
    <section style={footerStyle} className={footer_container}>
      <footer className={footer_wrap}>
        <div className={footer_wrapper}>
          <div className={footer_brand}>
            <Link to="/">
              <header className={footer_header}>
                <h1>Zirotech Global Ltd</h1>
              </header>
            </Link>
            <p>
              Our aim is to assist you in creating <br />
              and developing your digital product
            </p>
          </div>
          <div className={footer_links_wrap}>
            <header className={footer_header}>
              <h3>Useful link</h3>
            </header>
            <ul>
              {footerLinks.map(({ link, to }) => (
                <li key={link}>
                  <a href={to}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={footer_links_wrap}>
            <header className={footer_header}>
              <h3>Document</h3>
            </header>
            <ul>
              <li>Portfolio</li>
              <li>Privacy and policy</li>
            </ul>
          </div>
          <div className={footer_links_wrap}>
            <header className={footer_header}>
              <h3>Address</h3>
            </header>
            <ul>
              <li>52 Gains road, Portsmouth Uk</li>
              <li>
                <a href="tel:+447438566011">+447438566011</a>
              </li>
              <li>
                {" "}
                <a style={{textTransform: "lowercase"}} href="mailto:info@zirootech.com?cc=zirootech@gmail.com&subject=Message for Zirotech Support Team">
                  info@zirootech.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className={copyright_content_wrap}>
        <p>Copyright Zirotech Global Ltd {new Date().getFullYear()}</p>
      </div>
    </section>
  );
};

export default Footer;
