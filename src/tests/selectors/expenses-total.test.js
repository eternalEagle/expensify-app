import expenses from "../fixtures/expenses";
import expensesTotal from "../../selectors/expenses-total";

test("should return 0", () => {
  const totalValue = expensesTotal([]);
  expect(totalValue).toBe(0);
});

test("should correctly add up a single expense", () => {
  const totalValue = expensesTotal([expenses[1]]);
  expect(totalValue).toBe(109500);
});

test("should correctly add up multiple expenses", () => {
  const totalValue = expensesTotal(expenses);
  expect(totalValue).toBe(114195);
});
