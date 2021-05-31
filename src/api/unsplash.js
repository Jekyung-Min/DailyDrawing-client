import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID VMHqXClLHvYrKvV5qKUQI_SKia5PG5w_F7hbivGLopg"
  }
})