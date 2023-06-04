import axios from "axios";

const http = axios.create({
  baseURL: "https://hotels4.p.rapidapi.com",
  headers: {
    // "content-type": "application/json",
    "X-RapidAPI-Key": "650dee3d35msh2c065428f10a03bp15de87jsnf122930c860b",
    "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
  },
});

export default http;
