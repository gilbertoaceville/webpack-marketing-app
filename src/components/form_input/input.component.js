import React, { forwardRef, useState } from "react";
import classes from "./input.module.css";

const Input = forwardRef(
  (
    {
      placeholder = "Drop your email here...",
      width,
      icon = false,
      filterHandler,
      inputTitle,
      type = "text",
      required = true,
      name,
    },
    ref
  ) => {
    const { input_wrapper, input_container, search_icon_container, text_id } =
      classes;
    return (
      <figure title={inputTitle} className={input_wrapper}>
        <main style={{ width: width }} className={input_container}>
          <label htmlFor={text_id}>
            <input
              id={text_id}
              type={type}
              ref={ref}
              placeholder={placeholder}
              required={required}
              name={name}
            />
          </label>
          {icon && (
            <div
              onClick={(e) => {
                ref.current.focus();
                filterHandler(e, ref.current.value);
              }}
              className={search_icon_container}
            >
              <svg
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 487.95 487.95"
                style={{ enableBackground: "new 0 0 487.95 487.95" }}
              >
                <g>
                  <g>
                    <path
                      d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1
			c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4
			c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </div>
          )}
        </main>
      </figure>
    );
  }
);

export const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  let inputTag = null;

  switch (props.inputtype) {
    case "input":
      inputTag = (
        <>
          <input
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            focused={focused.toString()}
            className={classes.input}
          />
          <span>{errorMessage}</span>
        </>
      );
      break;
    case "textArea":
      inputTag = (
        <>
          <textarea
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            focused={focused.toString()}
          />
          <span>{errorMessage}</span>
        </>
      );
      break;
    default:
      <input placeholder="text" type="text" />;
  }

  return <figure className={classes.input_wrapper}>{inputTag}</figure>;
};

export default Input;
