import axios from "axios";
/**
 * This file has the base url for https://reqres.in/ calls
 */
export default axios.create({
  baseURL: "https://reqres.in/",
  headers: {
    "Content-type": "application/json",
  },
});
