import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "../sagas";
import serviceListReducer from "../slices/serviceListSlice";
import serviceReducer from "../slices/serviceSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    service: serviceReducer,
    serviceList: serviceListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(saga);
