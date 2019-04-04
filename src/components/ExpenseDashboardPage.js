import React from 'react';
import { connect } from 'react-redux';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses'

export class ExpenseDashboardPage extends React.Component {
  render() {
    return (
    <div>
      <ExpensesSummary
        expensesCount={this.props.expenses.length}
        expensesTotal={selectExpensesTotal(this.props.expenses)}
      />
      <ExpenseListFilters />
      <ExpenseList />
    </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseDashboardPage);
