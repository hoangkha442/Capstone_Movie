import { createSlice } from '@reduxjs/toolkit'
import { localSevice } from '../services/LocalStoreService';

const initialState = {
  // sẽ được chạy khi user Load trang
  userInfo: localSevice.get(),
  userBookTickets: [],
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setLogin: (state, action) => { 
      state.userInfo = action.payload
    },
    setUserBookTickets: (state, action) => {
      let cloneUserBookTickets = [...state.userBookTickets];
      let index = cloneUserBookTickets.findIndex((item) => {
        return item.tenGhe === action.payload.tenGhe;
      });
      if (index == -1) {
        let BookItem = { ...action.payload };
        cloneUserBookTickets.push(BookItem);
        state.userBookTickets = cloneUserBookTickets;
      } else {
        cloneUserBookTickets.splice(index, 1);
        state.userBookTickets = cloneUserBookTickets;
      }
    },
  }
});

export const { setLogin,  setUserBookTickets} = userSlice.actions

export default userSlice.reducer
