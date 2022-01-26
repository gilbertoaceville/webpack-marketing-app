import React from "react";
import { Helmet } from "react-helmet";

export const Headings = ({ title, description, }) => {
  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: "en" }}
      meta={[
        {
          name: `description`,
          content: description,
        },
      ]}
    />
  );
};
