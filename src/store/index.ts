import { configureStore } from "@reduxjs/toolkit";
import { clinicApi } from "./clinic/clinic.api";
import { clinicReducer } from "./clinic/clinic.slice";

export const store = configureStore({
  reducer: {
    [clinicApi.reducerPath]: clinicApi.reducer,
    clinic: clinicReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(clinicApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
