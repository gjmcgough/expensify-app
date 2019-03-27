import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

 export const ExpenseListItem = (props) => (
  <div>
    <Link to={`/edit/${props.id}`}>
      <h2>Expense: {props.description}</h2>
    </Link>
    <p>Amount: ${props.amount} - Created at: {props.createdAt}</p>

  </div>
);

export default connect()(ExpenseListItem);
