import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

 const ExpenseListItem = (props) => (
  <div>
    <h2>Expense: {props.description}</h2>
    <p>Amount: ${props.amount} - Created at: {props.createdAt}</p>
    <button onClick={() => {
        props.dispatch(removeExpense(props.id));
      }}
    >Remove</button>
  </div>
);

export default connect()(ExpenseListItem);
