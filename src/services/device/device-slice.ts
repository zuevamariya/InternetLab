import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TDevice = {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}

const initialState: TDevice = {
  isDesktop: false,
  isTablet: false,
  isMobile: false,
};

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setDeviceType: (state, action: PayloadAction<number>) => {
      state.isDesktop = action.payload > 1024;
      state.isTablet = action.payload <= 1024 && action.payload >= 768;
      state.isMobile = action.payload < 768;
    },
  },
});

export const {setDeviceType} = deviceSlice.actions;
export default deviceSlice.reducer;