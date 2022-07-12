import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

// Fetch Api Data 
export const fetchWeather = createAsyncThunk('weather/getweather',async(city) => {
    const res = await axios (`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=tr&appid=c574999a70aacbf982d6c8ef4db0cff6&units=metric`);
    return res.data;
});

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        items: [],
        status: 'idle',
        isApiGet: false,      
    },
    reducers: {},
    extraReducers: {
        [fetchWeather.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchWeather.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = "successed";
            toast.success('City Found')
            state.isApiGet = true;
        },
        [fetchWeather.rejected]: (state, action) => {
            state.status = "failed";
            toast.error('City Not Found');
        },
    },
});

export default weatherSlice.reducer;