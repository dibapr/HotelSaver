import axios from "axios";

const http = axios.create({
    baseURL: "https://hotels4.p.rapidapi.com",
    headers: {
        // "content-type": "application/json",
        "X-RapidAPI-Key": "f14096d84fmsh7a31bd57a8bc71dp1efd51jsn2b18d179bb3e",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
    },
});

export default http;