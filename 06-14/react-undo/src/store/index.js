import { configureStore } from "@reduxjs/toolkit";
import counterStore from "./modules/counterStore";

const store = configureStore({
  reducer: {
    counter1: counterStore,
  },
});

export default store;
