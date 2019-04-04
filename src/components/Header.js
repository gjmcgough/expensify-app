import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpensesSummary from './ExpensesSummary';
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total';

export class Header extends React.Component {
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
        <header>
          <h1>Expensify</h1>
          <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
          <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        </header>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(Header);
