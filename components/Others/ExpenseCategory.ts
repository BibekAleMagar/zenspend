export type ExpenseCategory =
  | "food"
  | "groceries"
  | "housing"
  | "utilities"
  | "transportation"
  | "personal care"
  | "health essentials";

export type ExpenseDto = {
  id: string;
  title: string;
  amount: number;
  category: ExpenseCategory;
  date: Date;
};
