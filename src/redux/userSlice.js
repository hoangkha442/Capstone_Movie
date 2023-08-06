import { createSlice } from '@reduxjs/toolkit'
import { localSevice } from '../services/LocalStoreService';

const initialState = {
  userInfo: localSevice.get(),
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setLogin: (state, action) => { 
      state.userInfo = action.payload
    }
  }
});

export const { setLogin } = userSlice.actions

export default userSlice.reducer