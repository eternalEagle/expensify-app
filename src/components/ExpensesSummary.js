import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import expensesTotal from "../selectors/expenses-total";

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount == 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expenseTotal / 100).format("$0,0.00");

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseWord} totaling{" "}
          <span>{formattedExpensesTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add expense
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenseCount: state.expenses.length,
    expenseTotal: expensesTotal(state.expenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
