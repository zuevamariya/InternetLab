import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TDevice = {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
  isSmallMobile: boolean;
}

const initialState: TDevice = {
  isDesktop: false,
  isTablet: false,
  isMobile: false,
  isSmallMobile: false,
};

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setDeviceType: (state, action: PayloadAction<number>) => {
      state.isDesktop = action.payload > 1024;
      state.isTablet = action.payload <= 1024 && action.payload >= 768;
      state.isMobile = action.payload < 768;
      state.isSmallMobile = action.payload <= 375;
    },
  },
});

export const {setDeviceType} = deviceSlice.actions;
export default deviceSlice.reducer;