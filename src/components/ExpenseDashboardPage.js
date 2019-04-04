import React from 'react';
import { connect } from 'react-redux';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total';

export class ExpenseDashboardPage extends React.Component {
  expensesCount = (expenses) => {
    return this.props.expenses.length;
  };
  expensesTotal = (expenses) => {
    return selectExpensesTotal(this.props.expenses);
  };
  render() {
    return (
      <div>
        <ExpensesSummary
          expensesCount={this.expensesCount}
          expensesTotal={this.expensesTotal}
          expenses={this.props.expenses}
        />
        <ExpenseListFilters />
        <ExpenseList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseDashboardPage);
