import { createSlice } from '@reduxjs/toolkit';

// initialState
const initialState = [
  /* ... */
];

// slice
const sampleSlice = createSlice({
  key: 'value',
  initialState,
  reducers: {
    /* ... */
  },
});

// 액션 크리에이터 내보내기
export const {
  /* ... */
} = sampleSlice.actions;

// 슬라이스 리듀서를 configureStore에  내보내기
export default sampleSlice.reducer;
