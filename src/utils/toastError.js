import { toast } from "react-toastify";

const toastError = (message) => {
  toast.error(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 5000,
  });
};

export default toastError;
