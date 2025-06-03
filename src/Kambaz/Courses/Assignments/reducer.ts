import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";

const assignmentSlice = createSlice({
  name: "assignmentReducer",
  initialState: {
    assignments: db.assignments,
  },
  reducers: {
    addAssignment: (state, action) => {
      state.assignments.push(action.payload);
    },
    updateAssignment: (state, action) => {
      const index = state.assignments.findIndex(a => a._id === action.payload._id);
      if (index !== -1) {
        state.assignments[index] = { ...state.assignments[index], ...action.payload };
      }
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(a => a._id !== action.payload);
    },
  },
});

export const { addAssignment, updateAssignment, deleteAssignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;
