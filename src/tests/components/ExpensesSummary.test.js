import React from "react";
import { shallow } from "enzyme";
import { ExpenseSummary } from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";

test("should render ExpenseSummary correctly with 1 expense", () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={1} expenseTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary correctly with multiple expenses", () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={100} expenseTotal={455235} />
  );
  expect(wrapper).toMatchSnapshot();
});
