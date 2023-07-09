import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PRODUCT_KEYS = {
  PRODUCT_ID: "food_id",
  PRODUCT_NAME: "food_name",
  PRODUCT_IMAGE: "imageLink",
  PRODUCT_ABOUT: "about",
  PRODUCT_FOOD_CATEGORY: "food_category",
  PRODUCT_REVIEWS: "reviews",
  PRODUCT_PRICE: "price",
  PRODUCT_DESCRIPTION: "description",
  PRODUCT_STAR: "star",
  PRODUCT_TIMING: "timing",
};

export const initialUserData = {
  userid: 0,
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  phoneNumber: "",
  email: "",
  usernameValid: true,
  phoneNumberValid: true,
  emailValid: true,
  passwordValid: true,
};

export const initialUserAddress = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  country: "",
  state: "",
  pincode: "",
  address: "",
};

export function toastFunction(type, message, time = 1000) {
  return toast[type](message, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: time,
  });
}
