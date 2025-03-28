import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentQuery: '',
  queryHistory: [],
  results: null,
  isLoading: false,
  error: null,
  suggestions: [
    "Show monthly sales for 2024",
    "Compare Q1 and Q2 revenue",
    "Top 5 products by sales",
    "Customer growth rate last 6 months"
  ]
};

const querySlice = createSlice({
  name: 'queries',
  initialState,
  reducers: {
    setCurrentQuery: (state, action) => {
      state.currentQuery = action.payload;
    },
    submitQuery: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    querySuccess: (state, action) => {
      state.isLoading = false;
      state.results = action.payload;
      state.queryHistory = [
        { query: state.currentQuery, timestamp: new Date().toISOString() },
        ...state.queryHistory.slice(0, 9) // Keep only last 10 queries
      ];
    },
    queryError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setCurrentQuery, submitQuery, querySuccess, queryError } = querySlice.actions;
export default querySlice.reducer;