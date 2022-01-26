import emailjs from "emailjs-com";
import { toast } from "react-toastify";

// switch to the next card
export const nextMove = (item, listItems = []) => {
  const newIndex = item + 1;
  return listItems[newIndex];
};

//switch to prev card
export const prevMove = (item, listItems = []) => {
  const newIndex = item - 1;
  return listItems[newIndex];
};

export const truncate = (str = "", length = 20, ending = "...") =>
  str.length > length
    ? `${str.substring(0, length - ending.length)} ${ending}`
    : str;

const successId = "success-id";
const errorId = "error-id";
export const mailer = async (e, element) => {
  e.preventDefault();
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const result = emailPattern.test(element);
  if (element !== null && result) {
    await toast.promise(
      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        "template_sbddz4t",
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
        toastId: successId,
      }
    );
    e.target.reset();
  } else {
    toast("An error occurred", {
      toastId: errorId,
    });
  }
};
