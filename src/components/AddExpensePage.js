import React from 'react';
import ExpenseForm from './ExpenseForm';
import { addExpense }  from '../actions/expenses';
import { connect } from 'react-redux';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        // redirect to the '/' page as if they clicked the link, no pge refresh
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
