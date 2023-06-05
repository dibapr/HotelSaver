import axios from "axios";

const http = axios.create({
  baseURL: "https://hotels4.p.rapidapi.com",
  headers: {
    // "content-type": "application/json",
    "X-RapidAPI-Key": "a51b866a62msh2e6059675701d40p129d5ajsn0bd572d1fd0c",
    "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
  },
});

export default http;
