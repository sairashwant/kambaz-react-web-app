import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  enrollments: [
    { "_id": "1", "user": "123", "course": "RS101" },
    { "_id": "2", "user": "234", "course": "RS101" },
    { "_id": "3", "user": "345", "course": "RS101" },
    { "_id": "4", "user": "456", "course": "RS101" },
    { "_id": "5", "user": "567", "course": "RS101" },
    { "_id": "6", "user": "234", "course": "RS102" },
    { "_id": "7", "user": "789", "course": "RS102" },
    { "_id": "8", "user": "890", "course": "RS102" },
    { "_id": "9", "user": "123", "course": "RS102" }
  ],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll(state, action: PayloadAction<{ userId: string; courseId: string }>) {
      const { userId, courseId } = action.payload;
      const exists = state.enrollments.find(
        (e) => e.user === userId && e.course === courseId
      );
      if (!exists) {
        state.enrollments.push({
          _id: (state.enrollments.length + 1).toString(),
          user: userId,
          course: courseId,
        });
      }
    },
    unenroll(state, action: PayloadAction<{ userId: string; courseId: string }>) {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (e) => !(e.user === userId && e.course === courseId)
      );
    },
    setEnrollments(state, action: PayloadAction<any[]>) {
      state.enrollments = action.payload;
    },
  },
});

export const { enroll, unenroll, setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
