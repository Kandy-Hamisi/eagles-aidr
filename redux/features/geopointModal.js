import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
};


const geopointModalSlice = createSlice({
    name: "geopointModal",
    initialState,
    reducers: {
        openGeopoint: (state) => {
            state.isOpen = true;
        },
        closeGeopoint: (state) => {
            state.isOpen = false;
        }
    }
})

export const { openGeopoint, closeGeopoint } = geopointModalSlice.actions;
export default geopointModalSlice.reducer;