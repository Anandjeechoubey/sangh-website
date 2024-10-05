// redux/slices/user.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string;
  name: string;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  email: '',
  name: '',
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action: PayloadAction<Partial<UserState>>) => {
      state.email = action.payload.email || state.email;
      state.name = action.payload.name || state.name;
      state.isAuthenticated = !!action.payload.email; // Set to true if email is present
    },
    clearUserDetails: (state) => {
      state.email = '';
      state.name = '';
      state.isAuthenticated = false;
    },
  },
});

export const { setUserDetails, clearUserDetails } = userSlice.actions;
export default userSlice.reducer;
