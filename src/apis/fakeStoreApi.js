import axios from "axios";

/**
 * This fakeStoreApi.js has the base url for the fakestoreApi calls
 */
export default axios.create({
  baseURL: "https://fakestoreapi.com",
});
