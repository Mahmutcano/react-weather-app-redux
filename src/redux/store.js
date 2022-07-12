import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";
import auth from './authSlice'

const store = configureStore({
    reducer: {
        weather: weatherSlice,
        auth
    },
});

export default store