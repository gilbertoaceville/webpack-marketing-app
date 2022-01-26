import React from "react";
import classes from "./button.module.css";

const Button = ({ label, onclick, disabled, type, icon }) => {
  const { btn } = classes;
  return (
    <button
      className={btn}
      onClick={onclick}
      disabled={disabled}
      type={type || "button"}
    >
      {icon} {label}
    </button>
  );
};

export default Button;
