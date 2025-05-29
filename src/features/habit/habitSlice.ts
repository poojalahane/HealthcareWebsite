import { createSlice, nanoid } from "@reduxjs/toolkit";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completeDates: string[];
  createdAt: string;
}

interface HabitState {
  habits: Habit[];
}

const initialState: HabitState = {
  habits: [],
};

export const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action) => {
      const habit = {
        id: nanoid(),
        name: action.payload.name,
        frequency: action.payload.frequency,
      };
      state.habits.push(habit);
    },
  },
});

export const { addHabit } = habitsSlice.actions;
export default habitsSlice.reducer;
