import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
};


const menuModalSlice = createSlice({
    name: "menuModal",
    initialState,
    reducers: {
        openMenu: (state) => {
            state.isOpen = true;
        },
        closeMenu: (state) => {
            state.isOpen = false;
        }
    }
})

export const { openMenu, closeMenu } = menuModalSlice.actions;
export default menuModalSlice.reducer;