import { toast } from "react-toastify";

const toastSuccess = (message) => {
  toast.success(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 5000,
  });
};

export default toastSuccess;
