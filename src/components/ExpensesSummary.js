import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

const ExpensesSummary = (props) => {
  console.log("COUNT: " + props.expensesCount);
  const expenseWord = props.expensesCount > 1 ? 'expenses' : 'expense';
  const formattedExpensesTotal = numeral(props.expensesTotal / 100).format('$0,0.00');
  const totalExpenses = props.expensesCount;
  return (
    <div>
      <h2>Viewing {totalExpenses} {expenseWord} totalling {formattedExpensesTotal}.</h2>
    </div>
  );
};

export default ExpensesSummary;
