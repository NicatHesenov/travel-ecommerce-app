import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { tourApi } from "./Slices/dataSlices";

export const store = configureStore({
  reducer: {
    [tourApi.reducerPath]: tourApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tourApi.middleware),
});

setupListeners(store.dispatch);
