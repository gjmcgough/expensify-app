import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = (props) => {
  const expenseWord = props.expensesCount > 1 ? 'expenses' : 'expense';
  const formattedExpensesTotal = numeral(props.expensesTotal / 100).format('$0,0.00');
  const totalExpenses = props.expensesCount;
  return (
    <div>
      <h2>Viewing {totalExpenses} {expenseWord} totalling {formattedExpensesTotal}.</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
