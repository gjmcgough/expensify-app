import React from 'react';
import { connect } from 'react-redux';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses'

const ExpenseDashboardPage = (props) => (
<div>
  <ExpensesSummary
    expensesCount={props.expenses.length}
    expensesTotal={selectExpensesTotal(props.expenses)}
  />
  <ExpenseListFilters />
  <ExpenseList />
</div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseDashboardPage);
