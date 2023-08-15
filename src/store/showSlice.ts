import { createSlice } from '@reduxjs/toolkit';

interface FeatureState {
  isEnabled: boolean;
}

const initialState: FeatureState = {
  isEnabled: false,
};

const showSlice = createSlice({
  name: 'feature',
  initialState,
  reducers: {
    toggleShow: (state) => {
      state.isEnabled = !state.isEnabled;
    },
  },
});

export const { toggleShow } = showSlice.actions;
export default showSlice.reducer;
