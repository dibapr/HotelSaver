import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../services/http";

export const getDetails = createAsyncThunk(
  "detail/getDetails",
  async ({ id }) => {
    const response = await http.post(
      "properties/v2/detail",
      {
        currency: "IDR",
        locale: "id_ID",
        propertyId: id,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    return response.data?.data?.propertyInfo;
  }
);

const initialState = {
  details: [],
  loading: false,
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    resetDetails: (state) => {
      state.details = initialState.details;
      console.log(state.details, "detail resetted");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getDetails.fulfilled, (state, action) => {
        state.details = action.payload;
        state.loading = false;
      })
      .addCase(getDetails.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { resetDetails } = detailSlice.actions;
export default detailSlice.reducer;
