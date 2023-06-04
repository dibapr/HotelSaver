import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../services/http";

const initialState = {
  home: [],
  loading: false,
};

export const getHome = createAsyncThunk("home/getHome", async () => {
  // const options = {
  //     method: 'POST',
  //     url: 'https://hotels4.p.rapidapi.com/reviews/v3/list',
  //     headers: {
  //     'content-type': 'application/json',
  //     'X-RapidAPI-Key': 'f14096d84fmsh7a31bd57a8bc71dp1efd51jsn2b18d179bb3e',
  //     'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
  //     },
  //     data: {
  //     currency: 'USD',
  //     eapid: 1,
  //     locale: 'en_US',
  //     siteId: 300000001,
  //     propertyId: '9209612',
  //     size: 10,
  //     startingIndex: 0
  //     }
  // };
  // const response = await axios.request(options);
  // console.log(response.data);

  // const response = await axios.post(
  //   "https://hotels4.p.rapidapi.com/reviews/v3/list",
  //   {
  //     currency: "USD",
  //     eapid: 1,
  //     locale: "en_US",
  //     siteId: 300000001,
  //     propertyId: "9209612",
  //     size: 10,
  //     startingIndex: 0,
  //   },
  //   {
  //     headers: {
  //       "content-type": "application/json",
  //       "X-RapidAPI-Key": `${process.env.REACT_APP_RAPIDAPI_KEY}`,
  //       "X-RapidAPI-Host": `${process.env.REACT_APP_RAPIDAPI_HOST}`,
  //     },
  //   }
  // );
  // console.log(response.data.data);
  // return response.data.data;

  const response = await http.post(
    "properties/v2/list",
    {
      currency: "IDR",
      eapid: 46,
      locale: "en_ID",
      siteId: 321200046,
      destination: {
        regionId: "6049351",
      },
      rooms: [
        {
          adults: 2,
          children: [{ age: 5 }, { age: 7 }],
        },
      ],
      resultsStartingIndex: 0,
      resultsSize: 200,
      sort: "PRICE_LOW_TO_HIGH",
      filters: {
        price: { max: 150, min: 100 },
      },
    },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );

  console.log(response.data.data.propertySearch.properties);
  return response.data.data.propertySearch.properties;
});

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHome.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getHome.fulfilled, (state, action) => {
        state.home = action.payload;
        state.loading = false;
      })
      .addCase(getHome.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default homeSlice.reducer;
