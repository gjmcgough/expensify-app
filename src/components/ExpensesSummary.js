import React from 'react';
import numeral from 'numeral';

export default (props) => {
  const expenseWord = props.expensesCount(props.expenses) > 1 ? 'expenses' : 'expense';
  const formattedExpensesTotal = numeral(props.expensesTotal(props.expenses) / 100).format('$0,0.00');
  const totalExpenses = props.expensesCount(props.expenses);
  return (
    <div>
      <h3>Viewing {totalExpenses} {expenseWord} totalling {formattedExpensesTotal}.</h3>
    </div>
  );
};


// numeral(props.amount / 100).format('$0,0.00');
