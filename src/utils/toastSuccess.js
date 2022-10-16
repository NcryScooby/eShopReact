import { toast } from "react-toastify";

const toastSuccess = (message) => {
  toast.success(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000,
  });
};

export default toastSuccess;
