import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExpenseDto } from "../Others/ExpenseCategory";

interface ExpenseState {
  expenses: ExpenseDto[];
}

const initialState: ExpenseState = {
  expenses: [],
};

export const expenseSlice = createSlice({
  name: "expenses",
  initialState: initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<ExpenseDto>) => {
      state.expenses.push(action.payload);
    },

    removeExpense: (state, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload,
      );
    },
  },
});

export const { addExpense, removeExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
