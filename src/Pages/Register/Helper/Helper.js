import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const initialUserData = {
  userid: 0,
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  phoneNumber: "",
  email: "",
  address: "",
  landmark: "",
  usernameValid: true,
  phoneNumberValid: true,
  emailValid: true,
  passwordValid: true,
};

export function toastFunction(type, message, time = 1000) {
  return toast[type](message, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: time,
  });
}
