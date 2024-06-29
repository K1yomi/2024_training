import { configureStore } from "@reduxjs/toolkit";
import studentApi from "./modules/studentApi";

const store = configureStore({
  reducer: {
    [studentApi.reducerPath]: studentApi.reducer,
  },

  // 添加中间件
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentApi.middleware),
});
export default store;
